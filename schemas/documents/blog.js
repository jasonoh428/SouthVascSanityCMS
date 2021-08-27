export default {
  name: "blog",
  type: "document",
  title: "Blogs",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },

    {
      name:'breadcrumbs',
      title:'BreadCrumnb Structure',
      type:'reference',
      to:[{type:'breadcrumbs'}]
  },

    {
        name: "date",
        title: "Date",
        type: "date",
       
      },

    {
        name: "excerpt",
        title: "Excerpt",
        type: "text",
       
      },

    {
        name: "text",
        title: "Text",
        type: "blocks",
       
      },
  ],
};
