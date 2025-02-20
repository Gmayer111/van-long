"use server";

import { getUserByEmail } from "src/app/actions/users/user.actions";
import { MailSender } from "src/utils/mail-sender";
import { createVerificationToken } from "../verification-token/verification-token.actions";

export async function signin(email: string) {
  const user = await getUserByEmail(email);

  if (user?.error) {
    return user?.error;
  }
  const userEmail = user?.result?.email;

  const verificationToken = await createVerificationToken(user?.result);

  if (verificationToken?.error) {
    return verificationToken?.error;
  }

  try {
    MailSender({
      userEmail,
      tokenUrlParam: verificationToken?.result?.token,
    });
  } catch (error) {
    return { error: "Mail sending failed" };
  }
}
