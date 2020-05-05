# Cour-LP-React-PWA

Client - part 3 - Add a router

## Init of components

We gonna install the react router, install if with the following command:

```
$> npm install react-router-dom
```

Initialize all these components with some datas.

For example a text which describe the component. 

This will allow us to call component between routes.

- HomePage.js
- ProjectList.js
- ProjectDetail.js
- TaskList.js.js
- TaskDetail.js
- ProfilPage.js
- UserPage.js

Sample of a basic component:
```js

import React, { Component } from 'react';

class SampleComponent extends Component {
    render() {
      return <div>My first component</div>;
    }
}

export default SampleComponent;

```

## Creation of the router

The router will allow us to manage our route of the app. 

In `index.js` import the following component:

```js
import { BrowserRouter } from "react-router-dom";
```

Encapsulate the `<app>` component with the router.

```xml
<BrowserRouter>
```

### Route creation

In the `app.js` file 

Import these components.

```js
import { Switch, Route } from "react-router-dom";
```

In the `app.js` file we gonna add the switch, and create all the route.

```xml
  <Switch>
    <Route path="/home">
      <HomePage />
    </Route>
    <Route path="/me">
      <ProfilPage />
    </Route>
    <Route path="/user/:id">
      <UserPage />
    </Route>
    <Route path="/tasks">
      <TaskList />
    </Route>
    <Route path="/task/:id">
      <TaskDetail />
    </Route>
    <Route path="/projects/">
      <ProjectList />
    </Route>
    <Route path="/project/:id">
      <ProjectDetail />
    </Route>
  </Switch> 
```

Now if we reload the server we can call any route from the navigator and each with send us to **the component under it**.