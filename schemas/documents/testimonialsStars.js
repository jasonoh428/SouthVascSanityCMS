export default {
  name: "testimonialsStars",
  title: "Testimonials (Stars Layout)",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "review",
      type: "text",
      title: "Text",
    },
    {
        name:'date',
        type:'date',
        title:'Date'
    },

    {
        name:'starts',
        type:'number',
        title:'# of Stars, max 5'
    }
  ],
};
