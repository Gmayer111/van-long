"use server";

import { getUserByEmail } from "src/app/actions/users/user.actions";
import { postEmail } from "src/api/send/route";
import { createSession } from "src/lib/sessions";

export async function signin(email: string) {
  const user = await getUserByEmail(email);

  if (user?.error) {
    return user?.error;
  }
  const userEmail = user?.result?.email;

  const session = await createSession(user?.result?.id as number);

  await postEmail({
    userEmail: userEmail as string,
    tokenUrlParam: session.session as string,
  });
}
