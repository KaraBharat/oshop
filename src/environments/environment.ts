// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: 'XXXXXX',
    authDomain: 'oshop-6afff.firebaseapp.com',
    databaseURL: 'https://oshop-6afff.firebaseio.com',
    projectId: 'oshop-6afff',
    storageBucket: 'oshop-6afff.appspot.com',
    messagingSenderId: 'XXXXXX'
  }
};
