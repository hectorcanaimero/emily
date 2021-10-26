// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    url: 'http://ec2-18-218-253-190.us-east-2.compute.amazonaws.com:8000/api',
    version: 'v1',
    headers: {
      // 'Content-Type':  'application/application/x-www-form-urlencoded'
    },
    admin: {email: 'knaimero@gmail.com', password: 'meka123'}
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
