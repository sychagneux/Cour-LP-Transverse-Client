import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import logo from "./project.svg";
import HomePage from "./component/common/Home";
import UserPage from "./component/user/UserPage";
import ProfilPage from "./component/common/ProfilPage";
import TaskList from "./component/task/TaskList";
import TaskDetail from "./component/task/TaskDetail";
import ProjectList from "./component/project/ProjectList";
import ProjectDetail from "./component/project/ProjectDetail";

function App() {
  return (
    <div className="App">      
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Project App</h2>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/me">Profile page</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
        </ul>
      </nav>
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
    </div>
  );
}

export default App;
