export default {
  name: "insurance",
  title: "Insurance Section",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },

    {
      name: "text",
      title: "Text",
      type: "text",
    },

    {
      name: "images",
      title: "Logos",
      type: "array",
      of: [
        {
          type: "image",
        },
      ],
    },

    {
      name: "full",
      title: "Full List",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
  ],
};
