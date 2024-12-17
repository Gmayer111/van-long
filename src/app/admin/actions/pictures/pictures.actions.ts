"use server";

import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import prisma from "../../../../lib/db";

export async function createPicture(
  dishServiceId: number,
  formData: FormData,
  path?: string
) {
  try {
    await prisma.picture.create({
      data: {
        imageUrl: formData.get("imageUrl") as string,
        description: formData.get("description") as string,
        dishServiceId,
      },
    });

    revalidatePath(`/admin/dahsboard/${path}`);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return { error: "Picture already exists" };
      }
    }
    return { error: "Unknown error" };
  }
}

export async function updatePicture(
  imageUrl: string,
  formData: FormData,
  path?: string
) {
  try {
    await prisma.picture.update({
      where: {
        imageUrl,
      },
      data: {
        imageUrl: formData.get("imageUrl") as string,
        description: formData.get("description") as string,
      },
    });
    revalidatePath(`/admin/dahsboard/${path}`);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return { error: error.message };
    }
  }
}

export async function deletePicture(pictureId: number, path?: string) {
  try {
    await prisma.picture.delete({
      where: {
        id: pictureId,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return { error: error.message };
    }
  }
  revalidatePath(`/admin/dahsboard/${path}`);
}
