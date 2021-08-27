export default {
  name: "inPageMenus",
  title: "In Page Menus",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },

    {
      name: "links",
      type: "array",
      title: "Links",
      of: [
        {
          name: "link",
          title: "Link",
          type: "reference",
          to: [{ type: "page" }],
        },
      ],
    },
  ],
};
