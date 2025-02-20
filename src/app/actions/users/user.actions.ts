"use server";

import { Prisma } from "@prisma/client";
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
      return { error: `code de l'erreur ${error.code}` };
    }
  }
}
