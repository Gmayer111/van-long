/**
 * @jest-environment node
 */
import { Prisma } from "@prisma/client";
import { prismaMock } from "prisma/singleton";
import {
  createPicture,
  deletePicture,
  updatePicture,
} from "./pictures.actions";
import { File } from "@web-std/file";
import { put, del } from "@vercel/blob";

jest.mock("next/cache", () => ({
  revalidatePath: jest.fn(),
}));

jest.mock("@vercel/blob", () => ({
  put: jest.fn(),
  del: jest.fn(),
}));

describe("pictures.actions", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  const file = new File(["path-to-picture"], "path-to-picture.jpg", {
    type: "image/jpg",
  });

  const mockPicture = {
    id: 1,
    pictureUrl: file,
    frenchDescription: "Description de l'image en FR",
    englishDescription: "Description de l'image en EN",
    dishServiceId: 1,
    updatedAt: new Date("01 Jan 1970 00:00:00 GMT"),
    createdAt: new Date("01 Jan 1970 00:00:00 GMT"),
  };

  let formData = new FormData();
  formData.append("pictureUrl", mockPicture.pictureUrl);
  formData.append("frenchDescription", mockPicture.frenchDescription);
  formData.append("englishDescription", mockPicture.englishDescription);

  const mockBlob = {
    pathname: mockPicture.pictureUrl.name,
    body: mockPicture.pictureUrl,
    optionsInput: {
      access: "public",
    },
  };

  describe("when using create method", () => {
    it("should add the correct params to vercelblob's put method", async () => {
      // Given
      // data is above

      // When
      await createPicture(mockPicture.dishServiceId, formData);
      (put as jest.Mock).mockResolvedValue(mockBlob);

      // Then
      expect(put).toHaveBeenCalledWith(
        "path-to-picture.jpg",
        mockPicture.pictureUrl,
        {
          access: "public",
        }
      );
    });

    it("should create new picture", async () => {
      // Given
      const pictureData = {
        ...mockPicture,
        pictureUrl: "https://path-to-picture.jpg",
      };

      // When
      prismaMock.picture.create.mockResolvedValue(pictureData);
      (put as jest.Mock).mockResolvedValue(mockBlob);

      //then
      await expect(
        createPicture(mockPicture.dishServiceId, formData)
      ).resolves.toEqual({
        result: {
          id: 1,
          pictureUrl: "https://path-to-picture.jpg",
          frenchDescription: "Description de l'image en FR",
          englishDescription: "Description de l'image en EN",
          dishServiceId: 1,
          updatedAt: new Date("01 Jan 1970 00:00:00 GMT"),
          createdAt: new Date("01 Jan 1970 00:00:00 GMT"),
        },
      });
    });

    it("sould display error in case of picture already exist", async () => {
      jest.spyOn(prismaMock.picture, "create").mockImplementation(() => {
        throw new Prisma.PrismaClientKnownRequestError(
          "Picture already exist",
          {
            code: "P2002",
            clientVersion: " 2.19.0",
          }
        );
      });

      (put as jest.Mock).mockResolvedValue(mockBlob);

      expect(
        createPicture(mockPicture.dishServiceId, formData)
      ).resolves.toEqual({
        error: "Picture already exists",
      });
    });
    it("should throw error exception", async () => {
      jest.spyOn(prismaMock.picture, "create").mockImplementation(() => {
        throw new Error();
      });

      expect(
        createPicture(mockPicture.dishServiceId, formData)
      ).resolves.toEqual({
        error: "Unknown error",
      });
    });
  });

  describe("when using update method", () => {
    it("should return the same picture url if file input is undefined", async () => {
      // Given
      const undefinedFile = new File([], "undefined", {
        type: "image/jpg",
      });

      formData.set("pictureUrl", undefinedFile);

      const currentPictureUrl = "https://current-path-to-picture.jpg";
      const pictureData = {
        ...mockPicture,
        pictureUrl: currentPictureUrl,
      };

      // When
      prismaMock.picture.update.mockResolvedValue(pictureData);

      // Then
      await expect(updatePicture(currentPictureUrl, formData)).resolves.toEqual(
        {
          id: 1,
          pictureUrl: "https://current-path-to-picture.jpg",
          frenchDescription: "Description de l'image en FR",
          englishDescription: "Description de l'image en EN",
          dishServiceId: 1,
          updatedAt: new Date("01 Jan 1970 00:00:00 GMT"),
          createdAt: new Date("01 Jan 1970 00:00:00 GMT"),
        }
      );
    });

    it("should return new picture url if file input isn't udnefined", async () => {
      // Given
      const newPictureFile = new File(
        ["path-to-picture"],
        "path-to-picture.jpg",
        {
          type: "image/jpg",
        }
      );

      formData.set("pictureUrl", newPictureFile);
      const newPicture = formData.get("pictureUrl") as File;

      const mockBlob = {
        pathname: newPicture.name,
        body: newPicture,
        optionsInput: {
          access: "public",
        },
      };

      const currentPictureUrl = "https://current-path-to-picture.jpg";
      const pictureData = {
        ...mockPicture,
        pictureUrl: newPicture.name,
      };

      // When
      (put as jest.Mock).mockResolvedValue(mockBlob);
      prismaMock.picture.update.mockResolvedValue(pictureData);

      // Then
      await expect(updatePicture(currentPictureUrl, formData)).resolves.toEqual(
        {
          result: {
            id: 1,
            pictureUrl: newPicture.name,
            frenchDescription: "Description de l'image en FR",
            englishDescription: "Description de l'image en EN",
            dishServiceId: 1,
            updatedAt: new Date("01 Jan 1970 00:00:00 GMT"),
            createdAt: new Date("01 Jan 1970 00:00:00 GMT"),
          },
        }
      );
    });

    it("sould throw error exception", async () => {
      expect(
        jest.spyOn(prismaMock.picture, "update").mockImplementation(() => {
          throw new Error();
        })
      ).toThrow();
    });
  });

  describe("when using delete method", () => {
    it("should delete picture", async () => {
      // Given
      const pictureData = {
        ...mockPicture,
        pictureUrl: mockPicture.pictureUrl.name,
      };

      // when
      prismaMock.picture.delete.mockResolvedValue(pictureData);
      const result = await deletePicture(
        mockPicture.id,
        mockPicture.pictureUrl.name
      );

      // then
      expect(prismaMock.picture.delete).toHaveBeenCalledWith({
        where: {
          id: 1,
        },
      });
      expect(result).toBeUndefined();
    });
    it("sould throw error exception", async () => {
      expect(
        jest.spyOn(prismaMock.picture, "delete").mockImplementation(() => {
          throw new Error();
        })
      ).toThrow();
    });
  });
});
