/**
 * @jest-environment node
 */

import { prismaMock } from "prisma/singleton";
import { createExtra, deleteExtra, updateExtra } from "./extras.actions";
import { Prisma } from "@prisma/client";

jest.mock("next/cache", () => ({
  revalidatePath: jest.fn(),
}));

describe("extras.actions", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  const mockExtra = {
    id: 1,
    labelFR: "* Servis avec du riz nature",
    labelEN: "* Served w/ Jasmine rice",
    dishServiceId: 1,
    updatedAt: new Date("01 Jan 1970 00:00:00 GMT"),
    createdAt: new Date("01 Jan 1970 00:00:00 GMT"),
  };

  let formData = new FormData();
  formData.append("labelFR", mockExtra.labelFR);
  formData.append("labelEN", mockExtra.labelEN);

  describe("when using create", () => {
    it("should create new extra", async () => {
      prismaMock.extra.create.mockResolvedValue(mockExtra);

      const result = await createExtra(mockExtra.dishServiceId, formData);

      expect(prismaMock.extra.create).toHaveBeenCalledWith({
        data: {
          labelFR: "* Servis avec du riz nature",
          labelEN: "* Served w/ Jasmine rice",
          dishServiceId: 1,
        },
      });
      expect(result).toBeUndefined();
    });

    it("sould display error in case of extra already exist", async () => {
      jest.spyOn(prismaMock.extra, "create").mockImplementation(() => {
        throw new Prisma.PrismaClientKnownRequestError("Extra already exist", {
          code: "P2002",
          clientVersion: " 2.19.0",
        });
      });

      expect(createExtra(mockExtra.dishServiceId, formData)).resolves.toEqual({
        error: "Extra already exist",
      });
    });
    it("should throw error exception", async () => {
      jest.spyOn(prismaMock.extra, "create").mockImplementation(() => {
        throw new Error();
      });

      expect(createExtra(mockExtra.dishServiceId, formData)).resolves.toEqual({
        error: "Unknown error",
      });
    });
  });

  describe("when using update method", () => {
    it("should update extra", async () => {
      prismaMock.extra.update.mockResolvedValue(mockExtra);

      const result = await updateExtra(mockExtra.id, formData);

      expect(prismaMock.extra.update).toHaveBeenCalledWith({
        where: {
          id: mockExtra.id,
        },
        data: {
          labelFR: "* Servis avec du riz nature",
          labelEN: "* Served w/ Jasmine rice",
        },
      });
      expect(result).toBeUndefined();
    });

    it("sould throw error exception", async () => {
      expect(
        jest.spyOn(prismaMock.extra, "update").mockImplementation(() => {
          throw new Error();
        })
      ).toThrow();
    });
  });

  describe("when using delete method", () => {
    it("should delete extra", async () => {
      prismaMock.extra.delete.mockResolvedValue(mockExtra);

      const result = await deleteExtra(mockExtra.id);

      expect(prismaMock.extra.delete).toHaveBeenCalledWith({
        where: {
          id: 1,
        },
      });
      expect(result).toBeUndefined();
    });
    it("sould throw error exception", async () => {
      expect(
        jest.spyOn(prismaMock.extra, "delete").mockImplementation(() => {
          throw new Error();
        })
      ).toThrow();
    });
  });
});
