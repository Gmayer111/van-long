import { mockDeep, mockReset, DeepMockProxy } from "jest-mock-extended";
import prisma from "src/lib/db";
import { PrismaClient } from "./generated/prisma";

jest.mock("src/lib/db.ts", () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}));

beforeEach(() => {
  mockReset(prismaMock);
});

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;
