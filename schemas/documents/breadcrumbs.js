export default {
  name: "breadcrumbs",
  title: "Breadcrumbs",
  type: "document",

  fields: [

    {
        name:'internal',
        title:'Internal Name',
        type:'string'
    },
    {
      name: "breadcrumbs",
      type: "array",
      title: "Breadcrumbs",

      of: [
        {
          type: "object",
          name: "breadcrumb",
          title: "Breadcrumb",

          fields: [
            {
              name: "link",
              title: "Link",
              type: "reference",
              to: [
                {
                  type: "page",
                },
              ],
            },

            {
              name: "displau",
              title: "Display",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
