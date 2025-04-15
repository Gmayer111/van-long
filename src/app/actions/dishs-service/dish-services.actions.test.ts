/**
 * @jest-environment node
 */
import {
  getAllDishServices,
  getAllDishsServiceItems,
} from "./dish-services.actions";
import { prismaMock } from "prisma/singleton";

describe("dish-service.actions", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe("when usins get all dish-services method", () => {
    it("should return all dish-services", async () => {
      const mockDishServices = [
        {
          id: 1,
          titleFR: "Entrées",
          titleEN: "starters",
          slug: "starters",
          updatedAt: new Date("01 Jan 1970 00:00:00 GMT"),
          createdAt: new Date("01 Jan 1970 00:00:00 GMT"),
        },
        {
          id: 2,
          titleFR: "Soupes",
          titleEN: "soups",
          slug: "starters",
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
        titleFR: "Entrées",
        titleEN: "Starters",
        slug: "starters",
        updatedAt: new Date("01 Jan 1970 00:00:00 GMT"),
        createdAt: new Date("01 Jan 1970 00:00:00 GMT"),
      };
      prismaMock.dishService.findFirst.mockResolvedValue(mockDishsService);

      const result = await getAllDishsServiceItems({
        pathnameParams: "starters",
        dishs: true,
        pictures: false,
      });

      expect(prismaMock.dishService.findFirst).toHaveBeenCalledWith({
        where: {
          slug: "starters",
        },
        include: {
          dishs: true,
          pictures: false,
        },
      });
      expect(result).toBe(mockDishsService);
    });
  });
});
