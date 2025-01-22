import path from "path";

/**
 *
 * @param pictureToConvert
 * @returns
 *
 * Method wich allows to retrieve the buffer
 * and creates the absolute path
 */
export const PictureFormatter = async (pictureToConvert: File) => {
  const buffer = Buffer.from(await pictureToConvert.arrayBuffer());
  const fileName = pictureToConvert.name.replaceAll(" ", "_");
  console.log("🚀 ~ PictureFormatter ~ fileName:", fileName);
  const pathToJoin = path.join(process.cwd(), "src/contents/" + fileName);
  console.log("🚀 ~ PictureFormatter ~ pathToJoin:", pathToJoin);
  const pathToPicture = pathToJoin
    .split("/")
    .filter(
      (word) =>
        word.includes("jpg") || word.includes("jpeg") || word === "assets"
    )
    .join("/");
  console.log("🚀 ~ PictureFormatter ~ pathToPicture:", pathToPicture);

  return { pathToJoin, pathToPicture, buffer };
};
