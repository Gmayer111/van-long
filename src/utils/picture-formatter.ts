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
  const pathToJoin = path.join(process.cwd(), "public/assets/" + fileName);
  const pathToPicture = pathToJoin
    .split("/")
    .filter(
      (word) =>
        word.includes("jpg") || word.includes("jpeg") || word === "assets"
    )
    .join("/");

  return { pathToJoin, pathToPicture, buffer };
};
