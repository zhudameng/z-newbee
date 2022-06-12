import { CollectionOptions } from '@znewbee/database';

export default {
  name: 'comments',
  fields: [
    {
      type: 'belongsTo',
      name: 'post',
    },
    {
      type: 'integer',
      name: 'status',
      defaultValue: 0
    }
  ],
} as CollectionOptions;
