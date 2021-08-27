export default {
    name:'nav',
    type:'document',
    title:'Navigation',

    fields: [{
        title:'Title',
        name:'title',
        type:'string',
    },

    {
        name:'links',
        title:'Links',
        type:'array',
        of:[{
            type:'topLink'
        }]
    },

    {
        name:'button',
        title:'Button 1 Link',
        type:'reference',
        to:[{type:'page'}]
    },

    {
        name:'sidebar',
        title:'Sidebar Links',
        type:'array',
        of:[{
            type:'subLink'
        }]
    }



]
}