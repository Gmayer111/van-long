"use server";
import { signIn } from "auth";

export type THandleSignin = {
  urlParams: {
    [key: string]: string | string[];
  };
};

export async function handleSignin({ urlParams }: THandleSignin) {
  console.log(urlParams);

  if (urlParams) {
    await signIn("nodemailer", urlParams);
  }

  //   const res = await signIn();
}
