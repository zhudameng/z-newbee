{
  "name": "{{{name}}}",
  "private": true,
  "workspaces": [
    "packages/*/*"
  ],
  "scripts": {
    "znewbee": "znewbee",
    "dev": "znewbee dev",
    "start": "znewbee start",
    "clean": "znewbee clean",
    "build": "znewbee build",
    "test": "znewbee test",
    "postinstall": "znewbee postinstall",
    "lint": "eslint ."
  },
  "resolutions": {
    "@types/react": "^17.0.0",
    "@types/react-dom": "^17.0.0"
  },
  "dependencies": {
    "@znewbee/cli": "{{{version}}}",
    {{{dependencies}}}
  },
  "devDependencies": {
    "@znewbee/devtools": "{{{version}}}"
  }
}
