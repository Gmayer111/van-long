import prisma from "src/lib/db";
import { Prisma } from "./generated/prisma";

async function main() {
  console.log("Start seeding ...");

  for (let index = 0; index < 20; index++) {
    const initialDishs: Prisma.DishCreateInput[] = [
      {
        labelFR: `assiette-${index}`,
        labelEN: `dish-${index}`,
        price: Math.floor(Math.random() * 10 + 1),
        DishService: {
          connectOrCreate: {
            where: {
              id: index < 10 ? 1 : 2,
            },
            create: {
              id: index < 10 ? 1 : 2,
              titleFR: index < 10 ? "entrées" : "soupes",
              titleEN: index < 10 ? "starters" : "soup",
              slug: index < 10 ? "starters" : "soup",
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
        pictureUrl: `/image-${index}`,
        descriptionFR: `description fr ${index}`,
        descriptionEN: `description en ${index}`,
        DishService: {
          connectOrCreate: {
            where: {
              id: index < 10 ? 1 : 2,
            },
            create: {
              id: index < 10 ? 1 : 2,
              titleFR: index < 10 ? "entrées" : "soupes",
              titleEN: index < 10 ? "starters" : "soup",
              slug: index < 10 ? "starters" : "soup",
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
