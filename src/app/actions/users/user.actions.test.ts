/**
 * @jest-environment node
 */

import { prismaMock } from "prisma/singleton";
import { getUserByEmail } from "./user.actions";
import { Prisma } from "@prisma/client";

describe("user.actions", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  const mockUser = {
    id: 1,
    email: "jojo@mail.fr",
    updatedAt: new Date("01 Jan 1970 00:00:00 GMT"),
    createdAt: new Date("01 Jan 1970 00:00:00 GMT"),
  };
  it("should find user by his email", async () => {
    await getUserByEmail(mockUser.email);
    prismaMock.user.findFirst.mockResolvedValue(mockUser);
    expect(prismaMock.user.findFirst).toHaveBeenCalledWith({
      where: {
        email: mockUser.email,
      },
    });
  });
  it("should return error code P2001 if user does not exist", async () => {
    jest.spyOn(prismaMock.user, "findFirst").mockImplementation(() => {
      throw new Prisma.PrismaClientKnownRequestError(
        "User with this email does not exists",
        {
          code: "P2001",
          clientVersion: " 2.19.0",
        }
      );
    });

    expect(getUserByEmail(mockUser.email)).resolves.toEqual({
      error: "User with this email does not exists",
    });
  });
  it("should throw error exception", async () => {
    jest.spyOn(prismaMock.user, "findFirst").mockImplementation(() => {
      throw new Error();
    });

    expect(getUserByEmail(mockUser.email)).resolves.toEqual({
      error: "Unknown error",
    });
  });
});
