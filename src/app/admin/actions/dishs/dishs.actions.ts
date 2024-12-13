"use server";

import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import prisma from "../../../../lib/db";

export async function createDish(
  dishServiceId: number,
  formData: FormData,
  path?: string
) {
  try {
    await prisma.dish.create({
      data: {
        label: formData.get("label") as string,
        price: Number(formData.get("price")),
        dishServiceId,
      },
    });

    revalidatePath(`/admin/dahsboard/${path}`);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return { error: "Dish already exists" };
      }
    }
    return { error: "Unknown error" };
  }
}

export async function updateDish(
  label: string,
  formData: FormData,
  path?: string
) {
  try {
    await prisma.dish.update({
      where: {
        label,
      },
      data: {
        label: formData.get("label") as string,
        price: Number(formData.get("price")),
      },
    });
    revalidatePath(`/admin/dahsboard/${path}`);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return { error: error.message };
    }
  }
}

export async function deleteDish(dishId: number, path?: string) {
  try {
    await prisma.dish.delete({
      where: {
        id: dishId,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return { error: error.message };
    }
  }
  revalidatePath(`/admin/dahsboard/${path}`);
}
