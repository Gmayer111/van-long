import { Merriweather, Merriweather_Sans } from "next/font/google";

export const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
});

export const merriweather_Sans = Merriweather_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});
