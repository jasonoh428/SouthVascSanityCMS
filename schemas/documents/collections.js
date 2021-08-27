export default {
  name: "collections",
  type: "document",
  title: "Page Collections",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "pages",
      type: "array",
      title: "Pages",
      of: [
        {
          title: "Page",
          type: "reference",
          to: [{ type: "page" }],
        },
      ],
    },
  ],
};
