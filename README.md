# Firebase Angular CRUD and Auth

This is a baseline project for Firebase CRUD actions on documents (create, edit, update, delete) and authentication.
The firebase document is tied to the authenticated user via uid.
Firebase config is located in src/environments/environment.ts
Copy, fork, clone, modify and run! Have fun!

## Setup

This is an Angular app that uses Google Firebase for backend and authentication.
You need to setup your Node and npm before running this app. You also need a Firebase project (create one from the Firebase console).
Great introductory video about Firebase:
`https://www.youtube.com/watch?v=q5J5ho7YUhA&t=595s`

1. clone this repo
2. run `npm install`
3. edit the `src/environments/environment.ts` file and add your firebase project config:
```javascript
export const environment = {
  production: false,
  firebase: {
    apiKey: "xxx",
    authDomain: "xxx",
    databaseURL: "xxx",
    projectId: "xxx",
    storageBucket: "xxx",
    messagingSenderId: "xxx",
    appId: "xxx",
    measurementId: "xxx" 
  }
};
```
4. run `ng serve` and open `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
5. enable your desired types of authentication in the Firebase console
6. go to `http://localhost:4200/login` and auth with Google, Facebook or email account or whatever you enabled in step 5.
7. CRUD operations in `http://localhost:4200/crud`, create, edit, delete and view items
8. you can modify the interface in `src/app/shared/models/crud.model.ts` as you like
9. the service `src/app/shared/services/crud.service.ts` is linked to the "crud" collection in Firebase, modify to your desired collection
10. Enjoy!!!


## Code scaffolding

This is an Angular project so standard ng commands work.
Feel free to generate additional components/services and reuse the baseline code provided with this project.
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Notes
- Authentication UI is done via package ngx-auth-firebaseui `https://www.npmjs.com/package/ngx-auth-firebaseui`. 
- PrimeNg is used general UI `https://primefaces.org/primeng/showcase/#/setup`