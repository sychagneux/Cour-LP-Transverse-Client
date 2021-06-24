import React, { Component } from "react";
import { useMutation } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";
import { useHistory } from "react-router-dom";


const ADD_TASK = gql`
  mutation AddTaskToProject($_id: ID!,$input: TaskInput!) {
    addTaskToProject(_id: $_id, input: $input)
  }
`;


function AddTask({project}) {
    let name;
    let description;
    let duration;
    let projectId = project._id;
    let history = useHistory();
    const [addTask, { data }] = useMutation(ADD_TASK);
    console.log(projectId)
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            addTask({ variables: { _id: projectId, input: {name: name.value, description: description.value, duration: duration.value }}});
            history.push("/project/"+projectId);
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
        <p>Duration:</p>
        <input
          ref={node => {
            duration = node;
          }}
        />
        <div className="margin-v-m">

        <button type="submit" className="btn-primary">Create Task</button>
        </div>
        </form>
      </div>
    );
  }

class TaskCreate extends Component {
  render() {
    console.log();
    return (
      <div className="container">
        <h4>Create a new task</h4>
        <AddTask project={this.props.location.state.project} />
      </div>
    );
  }
}

export default withRouter(TaskCreate);
