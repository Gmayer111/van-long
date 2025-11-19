"use server";

import { revalidatePath } from "next/cache";
import { Prisma } from "prisma/generated/prisma";
import prisma from "src/lib/db";

export async function getAllDishServicesOnExtras() {
  return await prisma.dishServicesOnExtras.findMany({
    include: {
      extra: true,
    },
  });
}

export async function createDishServicesOnExtras(
  dishServiceId: number,
  extraId: number,
  path?: string
) {
  try {
    await prisma.dishServicesOnExtras.create({
      data: {
        dishServiceId,
        extraId,
      },
    });
    revalidatePath(`/admin/dahsboard/${path}`);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return { error: "Extra already exist" };
      }
    }
    return { error: "Unknown error" };
  }
}
