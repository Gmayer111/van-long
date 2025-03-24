/**
 * @jest-environment node
 */
import { Prisma } from "@prisma/client";
import { createDish, deleteDish, updateDish } from "./dishs.actions";
import { prismaMock } from "prisma/singleton";

jest.mock("next/cache", () => ({
  revalidatePath: jest.fn(),
}));

describe("dishs.actions", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  const mockDish = {
    id: 1,
    labelFR: "Soupe Pho",
    labelEN: "Pho soup",
    price: 12,
    dishServiceId: 1,
    updatedAt: new Date("01 Jan 1970 00:00:00 GMT"),
    createdAt: new Date("01 Jan 1970 00:00:00 GMT"),
  };

  let formData = new FormData();
  formData.append("labelFR", mockDish.labelFR);
  formData.append("labelEN", mockDish.labelEN);
  formData.append("price", mockDish.price.toString());

  describe("when using create", () => {
    it("should create new dish", async () => {
      prismaMock.dish.create.mockResolvedValue(mockDish);

      const result = await createDish(mockDish.dishServiceId, formData);

      expect(prismaMock.dish.create).toHaveBeenCalledWith({
        data: {
          labelFR: "Soupe Pho",
          labelEN: "Pho soup",

          price: 12,
          dishServiceId: 1,
        },
      });
      expect(result).toBeUndefined();
    });

    it("sould display error in case of dish already exist", async () => {
      jest.spyOn(prismaMock.dish, "create").mockImplementation(() => {
        throw new Prisma.PrismaClientKnownRequestError("Dish already exist", {
          code: "P2002",
          clientVersion: " 2.19.0",
        });
      });

      expect(createDish(mockDish.dishServiceId, formData)).resolves.toEqual({
        error: "Dish already exists",
      });
    });
    it("should throw error exception", async () => {
      jest.spyOn(prismaMock.dish, "create").mockImplementation(() => {
        throw new Error();
      });

      expect(createDish(mockDish.dishServiceId, formData)).resolves.toEqual({
        error: "Unknown error",
      });
    });
  });

  describe("when using update method", () => {
    it("should update dish", async () => {
      prismaMock.dish.update.mockResolvedValue(mockDish);

      const result = await updateDish(mockDish.id, formData);

      expect(prismaMock.dish.update).toHaveBeenCalledWith({
        where: {
          id: mockDish.id,
        },
        data: {
          labelFR: "Soupe Pho",
          labelEN: "Pho soup",

          price: 12,
        },
      });
      expect(result).toBeUndefined();
    });

    it("sould throw error exception", async () => {
      expect(
        jest.spyOn(prismaMock.dish, "update").mockImplementation(() => {
          throw new Error();
        })
      ).toThrow();
    });
  });

  describe("when using delete method", () => {
    it("should delete dish", async () => {
      prismaMock.dish.delete.mockResolvedValue(mockDish);

      const result = await deleteDish(mockDish.id);

      expect(prismaMock.dish.delete).toHaveBeenCalledWith({
        where: {
          id: 1,
        },
      });
      expect(result).toBeUndefined();
    });
    it("sould throw error exception", async () => {
      expect(
        jest.spyOn(prismaMock.dish, "delete").mockImplementation(() => {
          throw new Error();
        })
      ).toThrow();
    });
  });
});
