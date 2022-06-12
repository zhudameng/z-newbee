import { skip } from '@znewbee/acl';
import { InstallOptions, Plugin } from '@znewbee/server';
import { resolve } from 'path';

export class SystemSettingsPlugin extends Plugin {
  getInitAppLang(options) {
    return options?.cliArgs?.[0]?.opts?.lang || process.env.INIT_APP_LANG || 'en-US';
  }

  async install(options?: InstallOptions) {
    await this.db.getRepository('systemSettings').create({
      values: {
        title: 'znewbee',
        appLang: this.getInitAppLang(options),
        logo: {
          title: 'znewbee-logo',
          filename: '682e5ad037dd02a0fe4800a3e91c283b.png',
          extname: '.png',
          mimetype: 'image/png',
          url: 'https://znewbee.oss-cn-beijing.aliyuncs.com/682e5ad037dd02a0fe4800a3e91c283b.png',
        },
      },
    });
  }

  beforeLoad() {
    const cmd = this.app.findCommand('install');
    if (cmd) {
      cmd.option('-l, --lang [lang]');
    }
  }

  async load() {
    await this.app.db.import({
      directory: resolve(__dirname, 'collections'),
    });
    this.app.acl.use(
      skip({
        resourceName: 'systemSettings',
        actionName: 'get',
      }),
    );
  }

  getName(): string {
    return this.getPackageName(__dirname);
  }
}

export default SystemSettingsPlugin;
