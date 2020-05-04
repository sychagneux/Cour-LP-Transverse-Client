# Cour-LP-React-PWA

Going to create a React App
Build a PWA installable APP
With a little design framework 

## First

Via npm, we gonna clone the Create-React-App template purposed by Facebook. 

### npx

```sh
npx create-react-app my-app
```

### or via npm

```sh
npm init react-app my-app
```

## Second 

Now we have the app ! Cool, 
What you can do for now: 

Success! Created my-app at C:\Users\ppier\Developpement\Cour-LP-React-PWA\my-app
Inside that directory, you can run several commands:

```sh
  npm start
``` 
    Starts the development server.
```sh
  npm run build
```
    Bundles the app into static files for production.
```sh
  npm test
```
    Starts the test runner.
```sh
  npm run eject
```
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

```sh
  cd my-app
  npm start
```

### Creation of the client 

Installation of the Apollo Client on our app 

```sh

    npm install apollo-boost react-apollo graphql

```

- apollo-boost: Package containing everything you need to set up Apollo Client

- react-apollo: View layer integration for React

- graphql: Also parses your GraphQL queries


### Creation of the server

You have a minimal configuration to start the projet :

- index.js: the main file that contain the ReactDOM

- app.js and app.test.js (unit test): App.js is the first component of your app 
