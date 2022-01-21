export default {
  name: "location",
  title: "Location",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "address",
      title: "Address",
      type: "string",
    },

    {
      name: "phoneGeneral",
      type: "string",
      title: "Phone General",
    },

    {
      name: "phoneAppt",
      type: "string",
      title: "Phone Appointments",
    },

    {
      name: "locationImage",
      type: "image",
    },
  ],
};
