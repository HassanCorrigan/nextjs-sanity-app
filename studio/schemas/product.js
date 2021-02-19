import ProductIcon from '../components/ProductIcon';

export default {
  title: 'Product',
  name: 'product',
  type: 'document',
  icon: ProductIcon,
  initialValue: () => ({
    stock: true,
    featured: false,
  }),
  fields: [
    {
      title: 'Product Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
      validation: Rule => Rule.required(),
    },
    {
      title: 'In Stock',
      name: 'stock',
      type: 'boolean',
    },
    {
      title: 'Featured',
      name: 'featured',
      type: 'boolean',
      description: 'Featured products are displayed on the homepage.',
    },
  ],
};
