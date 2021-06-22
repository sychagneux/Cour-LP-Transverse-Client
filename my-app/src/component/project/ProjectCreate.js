import React, { Component } from "react";
import { useMutation } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";
import { useHistory } from "react-router-dom";


const ADD_PROJECT = gql`
  mutation CreateProject($name: String! ,$description: String!) {
    createProject(name: $name, description: $description){
      name
      description
    }
  }
`;


function AddProject() {
    let name;
    let description;
    let history = useHistory();
    const [addProject, { data }] = useMutation(ADD_PROJECT);
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            addProject({ variables: { name: name.value, description: description.value } });
            history.push("/projects");
          }}
        >
        <p>Title:</p>
        <input
          ref={node => {
            name = node;
          }}
        />
        <p>Description:</p>
        <input
          ref={node => {
            description = node;
          }}
        />
        <div className="margin-v-m">

        <button type="submit" className="btn-primary">Create project</button>
        </div>
        </form>
      </div>
    );
  }

class ProjetCreate extends Component {
  render() {
    return (
      <div className="container">
        <h4>Create a new project</h4>
        <AddProject />
      </div>
    );
  }
}

export default withRouter(ProjetCreate);
