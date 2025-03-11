/**
 * @jest-environment node
 */
import { getUserByEmail } from "src/app/actions/users/user.actions";
import { createVerificationToken } from "src/app/actions/verification-token/verification-token.actions";
import { signin } from "./auth";

jest.mock("src/app/actions/users/user.actions", () => ({
  getUserByEmail: jest.fn(),
}));

jest.mock(
  "src/app/actions/verification-token/verification-token.actions",
  () => ({
    createVerificationToken: jest.fn(),
  })
);

jest.mock("src/api/send/route", () => ({
  POST: jest.fn(),
}));

describe("auth.actions page", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  const userEmail = "jojo@email.fr";

  it("should return error message if user does not exist", async () => {
    jest.mocked(getUserByEmail).mockResolvedValue({
      error: "User with this email does not exists",
    });
    expect(await signin(userEmail)).toBe(
      "User with this email does not exists"
    );
  });
  it("should return error message if verification token method failed", async () => {
    jest.mocked(createVerificationToken).mockResolvedValue({
      error: "Unknown error",
    });
  });
});
