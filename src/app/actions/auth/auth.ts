"use server";

import { getUserByEmail } from "src/app/actions/users/user.actions";
import { createVerificationToken } from "../verification-token/verification-token.actions";
import { postEmail } from "src/api/send/route";

export async function signin(email: string) {
  const user = await getUserByEmail(email);

  if (user?.error) {
    return user?.error;
  }
  const userEmail = user?.result?.email;

  const verificationToken = await createVerificationToken(user?.result);
  const verificationTokenError = verificationToken?.error;

  if (verificationTokenError) return verificationTokenError;

  await postEmail({
    userEmail: userEmail as string,
    tokenUrlParam: verificationToken?.result?.token as string,
  });
}
