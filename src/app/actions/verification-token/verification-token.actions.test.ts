/**
 * @jest-environment node
 */
import { prismaMock } from "prisma/singleton";
import { createVerificationToken } from "./verification-token.actions";
import { Prisma } from "@prisma/client";

jest.mock("src/lib/sessions", () => ({
  createSession: jest.fn().mockReturnValue({
    session: "token",
    expiresAt: new Date("01 Jan 1970 00:00:00 GMT"),
  }),
}));

describe("verification-token.actions", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  // Given
  const mockUser = {
    id: 1,
    email: "jojo@mail.fr",
    updatedAt: new Date("01 Jan 1970 00:00:00 GMT"),
    createdAt: new Date("01 Jan 1970 00:00:00 GMT"),
  };

  const mockVerificationToken = {
    id: 1,
    identifier: mockUser.email,
    token: "token",
    expires: new Date("01 Jan 1970 00:00:00 GMT"),
    updatedAt: new Date("01 Jan 1970 00:00:00 GMT"),
    createdAt: new Date("01 Jan 1970 00:00:00 GMT"),
  };
  it("should create verificationToken when user gives email", async () => {
    // When
    prismaMock.verificationToken.create.mockResolvedValue(
      mockVerificationToken
    );

    await createVerificationToken(mockUser);

    // Then
    expect(prismaMock.verificationToken.create).toHaveBeenCalledWith({
      data: {
        identifier: mockUser?.email as string,
        token: mockVerificationToken.token,
        expires: mockVerificationToken.expires,
      },
    });
  });
  it("should return error message if query failed", () => {
    jest
      .spyOn(prismaMock.verificationToken, "create")
      .mockImplementation(() => {
        throw new Error();
      });

    expect(createVerificationToken(mockUser)).resolves.toEqual({
      error: "Unknown error",
    });
  });
});
