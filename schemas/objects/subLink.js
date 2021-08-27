export default {
    name: "subLink",
    title: "Child Navigation Link",
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
        name:'file',
        type:'file',
        title:'File'
      },

      {
        name:'externalLink',
        type:'url',
        title:'External Link'
      },
  
      {
        name: "internalPage",
        type: "reference",
        title: "Page Link if Internal",
        to: [
          {
            type: "page",
          },
        ],
      },
  
      
    ],
  };
  