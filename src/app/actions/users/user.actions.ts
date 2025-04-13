"use server";

import { Prisma } from "../../../../prisma/generated/prisma/client";
import prisma from "src/lib/db";

export async function getUserByEmail(email: string) {
  try {
    const result = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    return { result };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2001") {
        return { error: "User with this email does not exists" };
      }
    }
    return { error: "Unknown error" };
  }
}
