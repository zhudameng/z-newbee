import { CollectionOptions } from '@znewbee/database';

export default {
  name: 'tags',
  fields: [
    {
      type: 'belongsToMany',
      name: 'posts',
    },
    {
      type: 'string',
      name: 'name'
    }
  ],
} as CollectionOptions;
