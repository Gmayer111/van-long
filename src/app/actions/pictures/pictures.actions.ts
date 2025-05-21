"use server";

import { revalidatePath } from "next/cache";
import { del, put } from "@vercel/blob";
import prisma from "src/lib/db";
import { Prisma } from "prisma/generated/prisma";

export async function createPicture(
  dishServiceId: number,
  formData: FormData,
  urlPath?: string
) {
  const pictureFile = formData.get("pictureUrl") as File;

  try {
    const { url } = await put(pictureFile.name, pictureFile, {
      access: "public",
    });
    const result = await prisma.picture.create({
      data: {
        pictureUrl: url,
        descriptionFR: formData.get("descriptionFR") as string,
        descriptionEN: formData.get("descriptionEN") as string,
        dishServiceId,
      },
    });
    revalidatePath(`/admin/dahsboard/${urlPath}`);
    return { result };
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
  pictureUrl: string,
  formData: FormData,
  urlPath?: string
) {
  let picturePathToJoin = "";
  const newPicture = formData.get("pictureUrl") as File;

  if (newPicture.name !== "undefined") {
    await del(pictureUrl);
    const { url, pathname } = await put(newPicture.name, newPicture, {
      access: "public",
    });

    picturePathToJoin = url;
  } else {
    picturePathToJoin = pictureUrl;
  }
  try {
    const result = await prisma.picture.update({
      where: {
        pictureUrl,
      },
      data: {
        pictureUrl: picturePathToJoin,
        descriptionFR: formData.get("descriptionFR") as string,
        descriptionEN: formData.get("descriptionEN") as string,
      },
    });
    revalidatePath(`/admin/dahsboard/${urlPath}`);
    return { result };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return { error: error.message };
    }
  }
}

export async function deletePicture(
  pictureId: number,
  pathToPicture: string,
  urlPath?: string
) {
  try {
    await del(pathToPicture);

    await prisma.picture.delete({
      where: {
        id: pictureId,
      },
    });
    revalidatePath(`/admin/dahsboard/${urlPath}`);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return { error: error.message };
    }
  }
}
