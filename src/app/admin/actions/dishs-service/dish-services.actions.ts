"use server";
import prisma from "src/lib/db";

export async function getAllDishServices() {
  return await prisma.dishService.findMany({});
}

export async function getAllDishsService(pathnameParams: string) {
  return await prisma.dishService.findFirst({
    where: {
      title: pathnameParams,
    },
    include: {
      dishs: true,
    },
  });
}
