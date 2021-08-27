export default {
  name: "logos",
  type: "object",
  title: "Logos",
  fields: [
    {
      name: "logos",
      type: "array",
      title: "Logos",
      of: [
        {
          type: "object",
          title: "Logo",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
            },
          ],
        },
      ],
    },
  ],
};
