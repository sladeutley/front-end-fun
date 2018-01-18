+ Install FB with npm
+ Add auth rules in Firebase console
+ Look at FB auth docs
    + users have their own “hidden” section in project. We can’t add or remove props ( can change vals, tho)
    + must create our own users_foo collection and link by ID in our db to add more properties
    + user persistence — session-based by default. User is there if refresh, but not if window/tab is closed
    + `onAuthStateChanged()` listener and “lag” time when refreshing page
+ Add fb-getter.js
  + Use credentials from “add to web app” link in project
  + add to `.gitignore`
+ Add `firebaseConfig` file for initializing Firebase instance in our app
+ Add User factory
+ Add auth btn click event in `main.js`
+ Add logout
+ Update/Add user-oriented CRUD actions
