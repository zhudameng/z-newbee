import React from 'react';
import { SchemaComponent, useRoute } from '@znewbee/client';

export const RouteSchemaComponent = () => {
  const route = useRoute();
  return <SchemaComponent schema={route.schema} />;
};
