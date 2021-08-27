export default {
    name:'serviceGrid',
    title:'Services Grid',
    type:'object',
    fields: [{
        name:'title',
        title:'Title',
        type:'string'
    },

    {
        name:'collection',
        type:'reference',
        to:[{type:'collections'}]
    }

]
}