export default {
  name: "sliderTestimonials",
  type: "object",
  title: "Slider Testimonials",

  fields: [
    {
      name: "testimonials",
      type: "array",
      title: "Testimonials",
      of: [
        {
          name: "testimonial",
          title: "Testimonial",
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },

            {
              name: "text",
              title: "Text",
              type: "text",
            },

            {
              name: "stars",
              title: "# of Starts",
              type: "number",
            },
          ],
        },
      ],
    },
  ],
};
