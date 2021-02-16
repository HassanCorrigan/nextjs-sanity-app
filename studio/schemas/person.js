import PersonIcon from '../components/PersonIcon';

export default {
  title: 'Person',
  name: 'person',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  icon: PersonIcon,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required().min(4).max(70),
    },
  ],
};
