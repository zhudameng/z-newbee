import Database from '@znewbee/database';
import PluginACL from '@znewbee/plugin-acl';
import UsersPlugin from '@znewbee/plugin-users';
import { MockServer, mockServer } from '@znewbee/test';
import { setCurrentRole } from '../middlewares/parseToken';
import { userPluginConfig } from './utils';

describe('role', () => {
  let api: MockServer;
  let db: Database;

  let usersPlugin: UsersPlugin;

  beforeEach(async () => {
    api = mockServer();
    await api.cleanDb();
    api.plugin(UsersPlugin, userPluginConfig);
    api.plugin(PluginACL);
    await api.loadAndInstall();

    db = api.db;
    usersPlugin = api.getPlugin('@znewbee/plugin-users');
  });

  afterEach(async () => {
    await api.destroy();
  });

  it('should set role with X-Role when exists', async () => {
    const currentUser = await db.getRepository('users').findOne({
      appends: ['roles'],
    });
    const ctx = {
      get(name) {
        if (name === 'X-Role') {
          return 'admin';
        }
      },
      state: {
        currentUser,
        currentRole: '',
      }
    }
    setCurrentRole(ctx);
    expect(ctx.state.currentRole).toBe('admin');
  });

  it('should set role with default', async () => {
    const currentUser = await db.getRepository('users').findOne({
      appends: ['roles'],
    });
    const ctx = {
      get(name) {
        if (name === 'X-Role') {
          return '';
        }
      },
      state: {
        currentUser,
        currentRole: '',
      }
    }
    setCurrentRole(ctx);
    expect(ctx.state.currentRole).toBe('root');
  });

  it('should set role with default when x-role does not exist', async () => {
    const currentUser = await db.getRepository('users').findOne({
      appends: ['roles'],
    });
    const ctx = {
      get(name) {
        if (name === 'X-Role') {
          return 'abc';
        }
      },
      state: {
        currentUser,
        currentRole: '',
      }
    }
    setCurrentRole(ctx);
    expect(ctx.state.currentRole).toBe('root');
  });

  it('should set role with anonymous', async () => {
    const currentUser = await db.getRepository('users').findOne({
      appends: ['roles'],
    });
    const ctx = {
      get(name) {
        if (name === 'X-Role') {
          return 'anonymous';
        }
      },
      state: {
        currentUser,
        currentRole: '',
      }
    }
    setCurrentRole(ctx);
    expect(ctx.state.currentRole).toBe('anonymous');
  });
});
