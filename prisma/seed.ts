import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding ...");

  for (let index = 0; index < 20; index++) {
    const initialDishs: Prisma.DishCreateInput[] = [
      {
        label: `dish-${index}`,
        price: 7,
        DishService: {
          connectOrCreate: {
            where: {
              id: index < 10 ? 1 : 2,
            },
            create: {
              id: index < 10 ? 1 : 2,
              title: index < 10 ? "starters" : "soup",
            },
          },
        },
      },
    ];
    for (const dish of initialDishs) {
      const newDish = await prisma.dish.create({
        data: dish,
      });
      console.log(`Created dish with id: ${newDish.id}`);
    }

    const initialPictures: Prisma.PictureCreateInput[] = [
      {
        imageUrl: `/image-${index}`,
        description: `description ${index}`,
        DishService: {
          connectOrCreate: {
            where: {
              id: index < 10 ? 1 : 2,
            },
            create: {
              id: index < 10 ? 1 : 2,
              title: index < 10 ? "starters" : "soup",
            },
          },
        },
      },
    ];
    for (const picture of initialPictures) {
      const newDish = await prisma.picture.create({
        data: picture,
      });
      console.log(`Created picture with id: ${newDish.id}`);
    }
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
