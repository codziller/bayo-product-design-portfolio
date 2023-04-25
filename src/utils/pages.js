const pages = [
  {
    url: "/",
    title: "Bayode",
    description: "Product & Motion Design",
    thumbnail: "/images/meta-image.png",
  },
];
export const getPageByPath = (path) =>
  pages.find(({ url }) => url === path) || pages[0];
