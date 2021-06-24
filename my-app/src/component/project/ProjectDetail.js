import React, { Component } from "react";
import { useQuery } from "@apollo/react-hooks";
import { IoIosClose, IoMdCheckmark } from "react-icons/io";
import { FaPlusSquare } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const GET_PROJECT = gql`
  query Projects($id: ID!) {
    project(_id: $id) {
      _id
      name
      description
      tasks {
        _id
        name
        description
        status
      }
    }
  }
`;
const DELETE_TASK = gql`
  mutation deleteTask($_id: ID!) {
    deleteTask(_id: $_id)
  }
`;

const UPDATE_TASK = gql`
  mutation updateTask($_id: ID!) {
    updateTask(_id: $_id)
  }
`;
function Project({ arg, id }) {
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id }
  });
  const [deleteTask] = useMutation(DELETE_TASK);
  const [updateTask] = useMutation(UPDATE_TASK);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const project = data.project;
  function arrayRemove(arr, value) { 
    return arr.filter(function(ele){ 
        return ele._id != value; 
    });
  };
  function updateTaskLocal(arr, value) { 
    return arr.filter(function(ele){ 
      if (ele._id == value) {
        ele.status = 1;
      }
      return ele;
    });
  }
  return (
    <div>
      <h2>
        {project.name}
      </h2>
      <p>
        {project.description}
      </p>
      {project.tasks != null ? 
      <ul>
        {project.tasks.map(item =>
          <li key={item._id} value={item.name} style={{background: item.status == 1 ? "lightseagreen" : "" }} className="project-list-item">
            <div className="project-item-detail" onClick={() => changeRoute(arg, ("/task/" + item._id.toString()))}>
              <h3>
                {item.name}
              </h3>
              <p>
                {item.description}
              </p>
            </div>
            <div className="project-item-action">
              <IoIosClose
                fontSize="1.75em"
                color="black"
                onClick={e => {
                  e.preventDefault();
                  deleteTask({ variables: { _id: item._id } });
                  project.tasks = arrayRemove(project.tasks,item._id);
                }}
              />
              { item.status != 1 ? 
              <IoMdCheckmark
                fontSize="1.75em"
                color="lightseagreen"
                onClick={e => {
                  e.preventDefault();
                  updateTask({ variables: { _id: item._id } });
                  project.tasks = updateTaskLocal(project.tasks,item._id);
                }}
              />
              : ""}
            </div>
          </li>
        )}
        <li className="" >
          
        </li>
      </ul>
    :
    <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <img
            width="10%"
            alt="Not found"
            src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/no_data_qbuo.svg"
          />
          <h4>This project did not contain any task.</h4>
        </div>
    }
      <div
        className="project-list-item"
        style={{
          padding: "1em"
        }}
        onClick={() => callMutationToAddTask(arg,project)}
      >
        <FaPlusSquare fontSize="1.5em" />
        <h3 className="button-new-task">Add new task</h3>
      </div>
    </div>
  );
}

function callMutationToValidateTask() {
  alert("Development information: \n Call a mutation to validate this task");
}
function callMutationToAddTask(props,projet) {
   props.history.push({
    pathname: "/new-task",
    state: {project: projet}
  })
}

function changeRoute(props, route) {
  props.history.push(route);
}

class ProjetDetail extends Component {
  render() {
    return (
      <div className="container">
        <Project arg={this.props} id={this.props.match.params.id} />
      </div>
    );
  }
}

export default withRouter(ProjetDetail);
