export const useTitle = (value: string) => {
  const index = value.indexOf(" ");
  return value.toLowerCase().substring(index, value.length - 1);
};

export const checkFormatMail = (
  mailFromUrl: string
): { mailFormatted: string; isMail: boolean } => {
  const mailRegex =
    /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/g;
  const mailFormatted = mailFromUrl.replace("%40", "@");
  const isMail = mailFormatted.match(mailRegex) ? true : false;
  return { mailFormatted, isMail };
};
