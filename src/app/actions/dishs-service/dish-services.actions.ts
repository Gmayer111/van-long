"use server";
import prisma from "src/lib/db";

export async function getAllDishServices() {
  return await prisma.dishService.findMany({});
}

export async function getAllDishsPictures({
  pathnameParams,
  dishs,
  pictures,
}: {
  pathnameParams: string;
  dishs?: boolean;
  pictures?: boolean;
}) {
  return await prisma.dishService.findFirst({
    where: {
      slug: pathnameParams,
    },
    include: {
      dishs: dishs,
      pictures: pictures,
    },
  });
}
