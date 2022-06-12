import { Application } from '@znewbee/server';
import config from './config';

const app = new Application(config);

if (require.main === module) {
  app.parse();
}

export default app;
