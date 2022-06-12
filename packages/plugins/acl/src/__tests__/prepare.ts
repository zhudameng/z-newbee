import PluginCollectionManager from '@znewbee/plugin-collection-manager';
import PluginUiSchema from '@znewbee/plugin-ui-schema-storage';
import { mockServer } from '@znewbee/test';
import PluginACL from '../server';

let mockRole: string = 'admin';
let mockUser = {};

export function changeMockRole(role: string) {
  mockRole = role;
}

export function changeMockUser(user: any) {
  mockUser = user;
}

export async function prepareApp() {
  const app = mockServer({
    registerActions: true,
  });

  await app.cleanDb();

  app.plugin(PluginUiSchema);
  app.plugin(PluginCollectionManager);

  app.resourcer.use(async (ctx, next) => {
    ctx.state.currentRole = mockRole;
    ctx.state.currentUser = mockUser;
    await next();
  });

  app.plugin(PluginACL);
  await app.loadAndInstall();

  await app.db.sync();

  return app;
}
