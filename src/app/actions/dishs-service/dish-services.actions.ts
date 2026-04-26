"use server";
import { revalidatePath } from "next/cache";
import { Prisma } from "prisma/generated/prisma";
import prisma from "src/lib/db";

export async function getAllDishServices() {
  return await prisma.dishService.findMany({
    orderBy: [
      {
        id: "asc",
      },
    ],
  });
}

export async function getAllDishServicesMenuItems() {
  return await prisma.dishService.findMany({
    orderBy: [
      {
        id: "asc",
      },
    ],
    include: {
      dishs: true,
      pictures: true,
      extras: true,
    },
  });
}

export async function getAllDishsServiceItems({
  pathnameParams,
  dishs,
  pictures,
  extras,
  dishServiceId,
}: {
  pathnameParams: string;
  dishs?: boolean;
  pictures?: boolean;
  extras?: boolean;
  dishServiceId?: number;
}) {
  return await prisma.dishService.findFirst({
    where: {
      slug: pathnameParams,
    },
    include: {
      dishs: dishs,
      pictures: pictures,
      extras: {
        where: {
          dishServiceId,
        },
        include: {
          extra: extras,
        },
      },
    },
  });
}

export async function updateDishServiceTitle(
  id: number,
  formData: FormData,
  path?: string,
) {
  try {
    await prisma.dishService.update({
      where: {
        id,
      },
      data: {
        titleEN: formData.get("titleEN") as string,
        titleFR: formData.get("titleFR") as string,
      },
    });
    revalidatePath(`/admin/dahsboard/${path}`);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return { error: error.message };
    }
  }
}
