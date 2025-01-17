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

jest.mock("next/cache", () => ({
  revalidatePath: jest.fn(),
}));

describe("pictures.actions", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  const mockPicture = {
    id: 1,
    pictureUrl: "/path/to/image",
    description: "Description de l'image",
    dishServiceId: 1,
    updatedAt: new Date("01 Jan 1970 00:00:00 GMT"),
    createdAt: new Date("01 Jan 1970 00:00:00 GMT"),
  };

  let formData = new FormData();
  formData.append("pictureUrl", mockPicture.pictureUrl);
  formData.append("description", mockPicture.description);

  describe("when using create", () => {
    it("should create new picture", async () => {
      prismaMock.picture.create.mockResolvedValue(mockPicture);

      const result = await createPicture(mockPicture.dishServiceId, formData);

      expect(prismaMock.picture.create).toHaveBeenCalledWith({
        data: {
          pictureUrl: "/path/to/image",
          description: "Description de l'image",
          dishServiceId: 1,
        },
      });
      expect(result).toBeUndefined();
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
    it("should update picture", async () => {
      prismaMock.picture.update.mockResolvedValue(mockPicture);

      const result = await updatePicture(mockPicture.pictureUrl, formData);

      expect(prismaMock.picture.update).toHaveBeenCalledWith({
        where: {
          pictureUrl: mockPicture.pictureUrl,
        },
        data: {
          pictureUrl: "/path/to/image",
          description: "Description de l'image",
        },
      });
      expect(result).toBeUndefined();
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
      prismaMock.picture.delete.mockResolvedValue(mockPicture);

      const result = await deletePicture(mockPicture.id);

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
