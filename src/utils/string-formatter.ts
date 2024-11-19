export const useTitle = (value: string) => {
  const index = value.indexOf(" ");
  return value.toLowerCase().substring(index, value.length - 1);
};
