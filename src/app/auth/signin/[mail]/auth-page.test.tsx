import { render } from "@testing-library/react";
import AuthPage from "./page";
import { redirect, useParams, useRouter } from "next/navigation";
import { checkFormatMail } from "src/utils/string-formatter";
import * as stringFormatter from "src/utils/string-formatter";
import { signin } from "src/app/actions/auth/auth";

jest.mock("next/navigation", () => ({
  useParams: jest.fn(),
  useRouter: jest.fn(),
  redirect: jest.fn(),
}));

jest.mock("src/app/actions/auth/auth", () => ({
  signin: jest.fn(),
}));

describe("When auth page is called", () => {
  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({
      mail: "gael%40mail.fr",
    });
  });
  it("should retrieve mail from url params", () => {
    render(<AuthPage />);

    expect(useParams).toHaveReturnedWith({
      mail: "gael%40mail.fr",
    });
  });
  it("should return mailFormatted and isEmail values", () => {
    render(<AuthPage />);
    expect(checkFormatMail(useParams().mail as string)).toStrictEqual({
      isMail: true,
      mailFormatted: "gael@mail.fr",
    });
  });

  it("should return to menu page if email format isn't correct", () => {
    const mockRouter = {
      push: jest.fn(),
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    jest.mocked(useParams).mockReturnValue({
      mail: "ceci n'est pas un mail",
    });
    render(<AuthPage />);
    expect(mockRouter.push).toHaveBeenCalledWith("/fr/carte");
  });

  it("should call signin method then redirect user to home page", () => {
    render(<AuthPage />);
    expect(signin).toHaveBeenCalledWith("gael@mail.fr");
    expect(redirect).toHaveBeenCalledWith("/fr");
  });
});
