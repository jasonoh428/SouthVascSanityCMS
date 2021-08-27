export default {
  name: "home",
  type: "document",
  title: "Homepage",
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
          source:'title'
      }
    },

    {
        name:'content',
        title:'Content',
        type:'content',
    }
  ],
};
