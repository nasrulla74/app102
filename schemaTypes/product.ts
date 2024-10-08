// import { sources } from "next/dist/compiled/webpack/webpack";

const product = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            title: 'About',
            name: 'about',
            type: 'text'
          },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxlength: 90
            }
        },
        {
          name: 'room_types',
          title: 'Room Types',
          type: 'array',
          of: [{ type: 'room_types' }]
        },

        
          {
            name: 'f_facilities',
            title: 'Feautured Facilities',
            type: 'array',
           of: [
             {
               name:'f_facilities',
               title:'Feautured Facilities',
               type:'string'
             }
           ]
          },
          {
            name: 'facilities',
            title: 'Facilities',
            type: 'array',
            of: [
             {
               name:'facilities',
               title:'Facilities',
               type:'string'
             }
           ]
          },
          {
            title: 'Hotel Type',
            name: 'hotel_type',
            type: 'string',
            options: {
              list: [
                {title: 'Resort', value: 'resort'},
                {title: 'Hotel', value: 'hotel'},
                {title: 'Guesthouse', value: 'guesthouse'}
              ], // <-- predefined values
              layout: 'radio' // <-- defaults to 'dropdown'
            }
          },
          
          {
            name: 'client',
            title: 'Client',
            type: 'reference',
            to: [{ type: 'client' }]
          },
          {
            name: 'location',
            title: 'Location',
            type: 'string',
          },
          {
            name: 'airport_distance',
            title: 'Distance from Airport',
            type: 'string',
          },
          {
            name: 'transfer_types',
            title: 'Available Transfer Types',
            type: 'string',
          },
          {
            name: 'no_of_rooms',
            title: 'Number of Rooms',
            type: 'string',
          },
          {
            name: 'check_in',
            title: 'Check-In',
            type: 'string',
          },
          {
            name: 'check_out',
            title: 'Check-Out',
            type: 'string',
          },
          {
            title: 'Cancelation Policy',
            name: 'cancelation_policy',
            type: 'string',
          },
          {
            name: 'child_policy',
            title: 'Child Policy',
            type: 'string',
          },
          {
            name: 'age_restriction',
            title: 'Age Restriction',
            type: 'string',
          },
          {
            name: 'pets',
            title: 'Pets',
            type: 'string',
          },

          
          {
            name: "fine_print",
            title: "The Fine Print",
            type: "array",
            of: [{ type: "block" }],
          },
          
              {
                name: 'faqs',
                type: 'array',
                title: 'Frequently Asked Questions',
                of: [
                  {
                    type: 'faq'
                  }
                ]
              },

          {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  { name: 'url', type: 'url', title: 'URL' },
                  { name: 'file', type: 'file', title: 'File' },
                ],
              },
            ],
            
          },

          

          

    ]


}
export default product