export default {
  name: "socials",
  title: "Socials",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },

    {
      name: "socials",
      title: "socials",
      type: "array",
      of: [
        {
          name: "social",
          type: "object",
          title: "Social",
          fields: [
            {
              type: "image",
              title: "Icon",
              name: "stirng",
            },

            {
              type: "string",
              title: "Name",
              name: "name",
            },

            {
              type: "url",
              title: "Link",
              name: "url",
            },
          ],
        },
      ],
    },
  ],
};
