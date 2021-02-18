import PostIcon from '../components/PostIcon';

export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  icon: PostIcon,
  initialValue: () => ({
    date: new Date().toISOString(),
    author: {
      _type: 'reference',
      _ref: 'a3018f7a-4e66-4f12-a35c-3f6b2c184fe3',
    },
  }),
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      title: 'Cover Image',
      name: 'cover',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{ type: 'person' }],
    },
    {
      title: 'Date',
      name: 'date',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
  ],
};
