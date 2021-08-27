export default {
    name:'page',
    type:'document',
    title:'Pages',
    fields: [
        {
            name:'title',
            title:'Title',
            type:'string'
        },

        {
            name:'breadcrumbs',
            title:'BreadCrumnb Structure',
            type:'reference',
            to:[{type:'breadcrumbs'}]
        },

        {
            name:'socials',
            title:'Page Socials?',
            type:'boolean'
        },

        {
            name:'headerTitle',
            title:'Header Title',
            type:'string'
        },

        {
            name:'slug',
            title:'Slug',
            type:'slug',
            options: {
                source:'title'
            }
        },

        {
            name:'hero',
            title:'Main Image',
            type:'image'
        },

        {
            name:'content',
            title:'Content',
            type:'content',
            
        },

        {
            name:'category',
            title:'Category',
            type:'reference',
            to:[{
                type:'pageCategory'
            }]
        }
    ],

    preview: {
        select: {
            title: 'title',
            subtitle: 'category.title',
            media: 'hero',
        },
    },
}