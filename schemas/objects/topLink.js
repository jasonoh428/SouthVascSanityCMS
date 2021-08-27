export default {
  name: "topLink",
  title: "Top Level Navigation Link",
  type: "object",
  fields: [
    {
      name: "display",
      title: "Display Name",
      type: "string",
    },

    {
      name: "internal",
      title: "Link is Internal?",
      type: "boolean",
    },

    {
      name: "file",
      title: "File",
      type: "file",
    },

    {
      name: "internalPage",
      type: "reference",
      title: "Page Link if Internal",
      to: [
        {
          type: "page",
        },

        {
          type: "home",
        },
      ],
    },

    {
        name:'children',
        type:'array',
        title:'Sub Links',
        of:[{
            type:'subLink'
        }]
    }


  ],
};
