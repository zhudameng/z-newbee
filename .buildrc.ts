export default {
  target: 'node',
  cjs: { type: 'babel', lazy: true },
  excludePkgs: [
    'core/build',
    'core/cli',
    'core/create-znewbee-app',
    'core/devtools',
    'core/dumi-theme-znewbee',
    'app/client',
  ],
};
