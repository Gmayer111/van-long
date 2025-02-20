"use server";

import { getUserByEmail } from "src/app/actions/users/user.actions";
import MailSender from "src/utils/mail-sender";
import { createVerificationToken } from "../verification-token/verification-token.actions";

export async function signin(email: string) {
  const user = await getUserByEmail(email);

  if (user?.error) {
    console.log("🚀 ~ signinMailMethod ~ user:", user.error);
    return null;
  }

  const emailUser = user?.result?.email;

  const verificationToken = await createVerificationToken(user?.result);

  if (verificationToken?.error) {
    console.log(
      "🚀 ~ signinMailMethod ~ verificationToken:",
      verificationToken?.error
    );
  }

  try {
    MailSender({
      userEmail: emailUser,
      tokenUrlParam: verificationToken?.result?.token,
    });
  } catch (error) {
    console.error("🚀 ~ signinMailMethod ~ error:", error);
    throw error;
  }
}
