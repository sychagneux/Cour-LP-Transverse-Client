# Cour-LP-React-PWA

Client - part 3 - Add a router

## Router

We gonna install the react router, install if with the following command:

```
$> npm install react-router-dom
```

Init all these components:

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

The router will allow us to manage our route of the app. 

In the `app.js` file we gonna add:

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