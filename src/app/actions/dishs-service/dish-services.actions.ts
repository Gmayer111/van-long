"use server";
import prisma from "src/lib/db";

export async function getAllDishServices() {
  return await prisma.dishService.findMany({});
}

export async function getAllDishServicesMenuItems() {
  return await prisma.dishService.findMany({
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
