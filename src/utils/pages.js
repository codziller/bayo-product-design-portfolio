const pages = [
  {
    url: "/",
    title: "Bayo",
    description:
      "Find reliable cleaning and laundry services at your fingertips from our vetted pool of providers.",
    thumbnail: "",
  },
];
export const getPageByPath = (path) =>
  pages.find(({ url }) => url === path) || pages[0];
