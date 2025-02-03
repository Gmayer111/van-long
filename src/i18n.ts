import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["fr", "en"];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as any)) notFound();

  return {
    messages: {
      ...(await import(`../messages/${locale}/${locale}.json`)).default,
      ...(await import(`../messages/${locale}/menu.json`)).default,
    },
  };
});
