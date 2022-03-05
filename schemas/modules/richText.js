export default {
  name: "blocks",
  type: "array",
  of: [
    { type: "block" },

    {
      name: "titleBar",
      type: "object",
      title: "Title Bar",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Text",
        },
      ],
    },

    {
      name: "overlayButton",
      type: "object",
      title: "Overlay Button",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Text",
        },
      ],
    },

    {
      name: "inlineImage",
      title: "Inline Image",
      type: "object",
      fields: [
        {
          name: "image",
          title: "Image",
          type: "image",
        },
        {
          name: "float",
          type: "string",
          title: "Alignment",
          options: { list: ["left", "right"] },
        },
        { name: "width", type: "number", title: "Width" },
      ],
    },
    {
      name: "groupImage",
      title: "Group Image",
      type: "object",
      fields: [{ type: "array", name: "images", of: [{ type: "image" }] }],
    },
  ],
};
