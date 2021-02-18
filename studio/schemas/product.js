import ProductIcon from '../components/ProductIcon';

export default {
  title: 'Product',
  name: 'product',
  type: 'document',
  icon: ProductIcon,
  initialValue: () => ({
    stock: true,
  }),
  fields: [
    {
      title: 'Product Image',
      name: 'image',
      type: 'image',
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
      validation: Rule => Rule.required(),
    },
  ],
};
