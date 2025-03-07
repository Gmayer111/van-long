import prisma from "src/lib/db";
import { Prisma, User } from "@prisma/client";
import { createSession } from "src/lib/sessions";

export async function createVerificationToken(user: User | null | undefined) {
  try {
    const tokenSession = await createSession(user?.id as number);
    const result = await prisma.verificationToken.create({
      data: {
        identifier: user?.email as string,
        token: tokenSession.session,
        expires: tokenSession.expiresAt,
      },
    });
    return { result };
  } catch (error) {
    return { error: "Unknown error" };
  }
}
