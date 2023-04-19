const pages = [
  {
    url: "/",
    title: "Cleand",
    description: "Cleand",
    thumbnail: "",
  },
];
export const getPageByPath = (path) =>
  pages.find(({ url }) => url === path) || pages[0];
