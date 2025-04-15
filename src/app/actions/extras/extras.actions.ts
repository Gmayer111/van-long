"use server";

import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import prisma from "src/lib/db";

export async function createExtra(
  dishServiceId: number,
  formData: FormData,
  path?: string
) {
  try {
    await prisma.extra.create({
      data: {
        labelEN: formData.get("labelEN") as string,
        labelFR: formData.get("labelFR") as string,
        dishServiceId,
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

export async function updateExtra(
  id: number,
  formData: FormData,
  path?: string
) {
  try {
    await prisma.extra.update({
      where: {
        id,
      },
      data: {
        labelEN: formData.get("labelEN") as string,
        labelFR: formData.get("labelFR") as string,
      },
    });
    revalidatePath(`/admin/dahsboard/${path}`);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return { error: error.message };
    }
  }
}

export async function deleteExtra(dishServiceExtraId: number, path?: string) {
  try {
    await prisma.extra.delete({
      where: {
        id: dishServiceExtraId,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return { error: error.message };
    }
  }
  revalidatePath(`/admin/dahsboard/${path}`);
}
