import { Plugin } from '@znewbee/server';

export class PresetNocobase extends Plugin {
  getName(): string {
    return this.getPackageName(__dirname);
  }
}

export default PresetNocobase;
