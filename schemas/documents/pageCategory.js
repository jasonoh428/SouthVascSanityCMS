export default {
    name: 'pageCategory',
    title: 'Page Categories',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },

        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source:'title'
            }
        },
    ],
}