export default {
  name: "sliderHero",
  title: "Slider Hero",
  type: "object",
  fields: [
    {
      type: "string",
      title: "Heading",
      name: "heading",
    },

    {
      type: "string",
      title: "SubHeading",
      name: "subHeading",
    },

    {
      type: "subLink",
      title: "Button 1 Link",
      name: "button1Link",
      
    },

    {
      type: "reference",
      title: "Button 2 Link",
      name: "button2Link",
      to: [
        {
          type: "page",
        },
      ],
    },

    {
      name: "slides",
      type: "array",
      of: [
        {
          type: "image",
          name: "slide",
          title: "Slide",
        },
      ],
    },
  ],
};
