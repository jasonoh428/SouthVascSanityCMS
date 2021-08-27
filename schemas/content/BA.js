export default {
  name: "BA",
  title: "Before and After Section",
  type: "object",
  fields: [
    {
      name: "beforeAfters",
      type: "array",
      title: "Before and Afters",
      of: [
        {
          type: "object",
          name: "ba",
          title: "Before and After",
          fields: [
            {
              name: "imageB",
              title: "Image Before",
              type: "image",
            },

            {
              name: "imageA",
              title: "Image After",
              type: "image",
            },
          ],
        },
      ],
    },
  ],
};
