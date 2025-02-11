/**
 * @jest-environment node
 */

import { prismaMock } from "prisma/singleton";
import { getAllDishServices } from "./dish-services.actions";

describe("dish-service.actions", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe("when usins get all dish-services method", () => {
    it("should return all dish-services", async () => {
      const mockDishServices = [
        {
          id: 1,
          title: "starters",
          updatedAt: new Date("01 Jan 1970 00:00:00 GMT"),
          createdAt: new Date("01 Jan 1970 00:00:00 GMT"),
        },
        {
          id: 2,
          title: "soup",
          updatedAt: new Date("01 Jan 1970 00:00:00 GMT"),
          createdAt: new Date("01 Jan 1970 00:00:00 GMT"),
        },
      ];
      prismaMock.dishService.findMany.mockResolvedValue(mockDishServices);
      const result = await getAllDishServices();

      expect(prismaMock.dishService.findMany).toHaveBeenCalled();
      expect(result).toBe(mockDishServices);
    });
  });

  describe("when using get all dishs-service with dishs relation method", () => {
    it("should return all dish with dish-service", async () => {
      const mockDishsService = {
        id: 1,
        title: "starters",
        updatedAt: new Date("01 Jan 1970 00:00:00 GMT"),
        createdAt: new Date("01 Jan 1970 00:00:00 GMT"),
      };
      prismaMock.dishService.findFirst.mockResolvedValue(mockDishsService);

      const result = await getAllDishServices();

      expect(prismaMock.dishService.findFirst).toHaveBeenCalledWith({
        where: {
          title: "starters",
        },
        include: {
          dishs: true,
        },
      });
      expect(result).toBe(mockDishsService);
    });
  });
});
