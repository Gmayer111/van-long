"use server";

import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import prisma from "../../../../lib/db";
import { unlink, writeFile, rename } from "fs/promises";
import path from "path";

export async function createPicture(
  dishServiceId: number,
  formData: FormData,
  urlPath?: string
) {
  const image = formData.get("imageUrl") as File;
  const buffer = Buffer.from(await image.arrayBuffer());
  const fileName = image.name.replaceAll(" ", "_");
  const pathToPicture = path.join(process.cwd(), "public/assets/" + fileName);

  try {
    await writeFile(pathToPicture, buffer as any);
    await prisma.picture.create({
      data: {
        imageUrl: pathToPicture,
        description: formData.get("description") as string,
        dishServiceId,
      },
    });

    revalidatePath(`/admin/dahsboard/${urlPath}`);
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
  urlPath?: string
) {
  const existingImage = path.join(imageUrl);
  const image = formData.get("imageUrl") as File;
  const buffer = Buffer.from(await image.arrayBuffer());
  const fileName = image.name.replaceAll(" ", "_");
  const pathToPicture = path.join(process.cwd(), "public/assets/" + fileName);

  try {
    await unlink(existingImage);

    await prisma.picture.update({
      where: {
        imageUrl,
      },
      data: {
        imageUrl: formData.get("imageUrl") as string,
        description: formData.get("description") as string,
      },
    });
    revalidatePath(`/admin/dahsboard/${urlPath}`);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return { error: error.message };
    }
  }
}

export async function deletePicture(
  pictureId: number,
  pathToPicture: string,
  path?: string
) {
  try {
    await unlink(pathToPicture);
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
