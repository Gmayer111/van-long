import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";
import { locales } from "./types/locales";

export const localePrefix = "always";

export const pathnames = {
  "/": "/",
  "/contact": "/contact",
  "/carte": {
    fr: "/carte",
    en: "/menu",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
