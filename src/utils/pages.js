const pages = [
  {
    url: "/",
    title: "Housepadi",
    description: "Housepadi",
    thumbnail: "",
  },
];
export const getPageByPath = (path) =>
  pages.find(({ url }) => url === path) || pages[0];
