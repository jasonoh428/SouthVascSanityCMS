export default {
  name: "imageRich",
  title: "Image and Rich Text Column",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Text",
      type: "blocks",
    },

    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],

  preview: {
      select: {
          title:'text',
          media:'image',
          subtitle:'_type'
      }
  }
};
