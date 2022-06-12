import { MockServer } from '@znewbee/test';
import { changeMockRole, changeMockUser, prepareApp } from './prepare';
import { Database } from '@znewbee/database';

describe('role check action', () => {
  let app: MockServer;
  let db: Database;

  beforeEach(async () => {
    app = await prepareApp();
    db = app.db;
  });

  afterEach(async () => {
    await app.destroy();
  });

  it('should return role info', async () => {
    const role = await db.getRepository('roles').create({
      values: {
        name: 'test',
      },
    });

    changeMockUser({
      id: 2,
    });

    changeMockRole('test');

    const response = await app.agent().get('/roles:check');

    expect(response.statusCode).toEqual(200);
  });
});
