import React, { Component } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
//npm install graphql-tag
//npm install @apollo/react-hooks

const GET_PROJECTS = gql`
  {
    projects {
      _id
      name
      description
    }
  }
`;

function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <ul>
      {data.projects.map(item =>
        <li key={item._id} value={item.name} className="project-list-item">
          <p>
            {item.name}
          </p>
          <p>
            {item.description}
          </p>
        </li>
      )}
    </ul>
  );
}

class ProjetList extends Component {
  render() {
    return (
      <div className="container">
        <h4 style={{
          marginLeft: ".5em"
        }}>List of all projects.</h4>
        <Projects />
      </div>
    );
  }
}

export default ProjetList;
