"use server";

import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import prisma from "../../../../lib/db";
import { unlink, writeFile } from "fs/promises";
import path from "path";
import { PictureFormatter } from "src/utils/picture-formatter";

export async function createPicture(
  dishServiceId: number,
  formData: FormData,
  urlPath?: string
) {
  const pictureFile = formData.get("pictureUrl") as File;
  const picture = await PictureFormatter(pictureFile);

  try {
    await writeFile(picture.pathToJoin, picture.buffer as any);
    await prisma.picture.create({
      data: {
        pictureUrl: `/${(await picture).pathToPicture}`,

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
  pictureUrl: string,
  formData: FormData,
  urlPath?: string
) {
  let picturePathToJoin = "";

  const existingPicture = path.join(process.cwd(), "public/", pictureUrl);
  const newPicture = formData.get("pictureUrl") as File;

  try {
    if (newPicture.name !== "undefined") {
      const picture = await PictureFormatter(newPicture);
      picturePathToJoin = `/${picture.pathToPicture}`;
      await unlink(existingPicture);
      await writeFile(picture.pathToJoin, picture.buffer as any);
    } else {
      picturePathToJoin = pictureUrl;
    }
    await prisma.picture.update({
      where: {
        pictureUrl,
      },
      data: {
        pictureUrl: picturePathToJoin,
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
  pathToPicture?: string,
  urlPath?: string
) {
  const pathToJoin = path.join(process.cwd(), "/public" + pathToPicture);

  try {
    await unlink(pathToJoin);

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
