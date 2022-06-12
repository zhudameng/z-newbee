import { Plugin } from '@znewbee/server';

export class PresetZNewbee extends Plugin {
  getName(): string {
    return this.getPackageName(__dirname);
  }
}

export default PresetZNewbee;
