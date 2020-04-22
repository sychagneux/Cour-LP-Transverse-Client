import React, { Component } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { withRouter } from 'react-router-dom';

const GET_PROJECT = gql`
  query Projects($id: ID!) {
    project(_id: $id) {
      _id
      name
      description
      tasks {
        name
        status
      }
    }
  }
`;

function Project({ id }) {
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id }
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const project = data.project;
  console.log("Data received from Project: ",project)
  return (
    <div>
      <h2>
        {project.name}
      </h2>
      <p>
        {project.description}
      </p>
    </div>
  );
}

class ProjetDetail extends Component {
  render() {
    console.log(this)
    return (
      <div className="container">
        <Project id={this.props.match.params.id} />
      </div>
    );
  }
}

export default withRouter(ProjetDetail);
