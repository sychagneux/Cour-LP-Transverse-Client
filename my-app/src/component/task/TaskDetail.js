import React, { Component } from "react";
import { useQuery } from "@apollo/react-hooks";
import { IoIosClose, IoMdCheckmark } from "react-icons/io";
import { FaPlusSquare } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
const GET_TASK_AND_USERS = gql`
  query Tasks($id: ID!) {
    task(_id: $id) {
      _id
      name
      description
      status
      user {
        _id
        pseudo
      }
    }
    users {
      _id
      pseudo
    }
  }
`;
const ASSIGN_TASK = gql`
  mutation assignTask($_id: ID!, $user_id: ID!) {
    assignTask(_id: $_id,user_id: $user_id)
  }
`;
function Task({ arg, id }) {
  let { loading, error, data } = useQuery(GET_TASK_AND_USERS, {
    variables: { id }
  });
  const [assignTask] = useMutation(ASSIGN_TASK);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;


  const task = data.task;
  const users = data.users;
  let user_id;
  return (
    <div>
      <div className="project-item-detail">
        <h2>
          {task.name}
        </h2>
        <p>
          {task.description}<br/><br/>
          <b>{task.status == 1 ? "Tache effectué" : "Tache non effectué"}</b><br/>
          <b>{task.user != null ? "Tache assigné à "+task.user.pseudo : "Tache non assigné"}</b>
        </p>
      </div>
    
      <div
        className="project-list-item"
        style={{
          padding: "1em"
        }}
      >
      <select id="userSelect" className="box" ref={node => {user_id = node;}} style={{marginRight: "10%",marginLeft: "5%"}}>
        <option value="-99" selected>Non assigné</option>
        {users.map(item =>
          <option value={item._id} >{item.pseudo}</option>
        )}
      </select>
        <FaPlusSquare fontSize="1.5em" />
        <h3 onClick={e => {
          assignTask({ variables: {_id: task._id, user_id: user_id.value}});
          window.location.reload(false)}} className="button-new-task">Assigné a un utilisateur</h3>
      </div>
      
    </div>
  );
}

class TaskDetail extends Component {
    render() {
      return (
        <div className="container">
          <Task arg={this.props} id={this.props.match.params.id}/>
        </div>
      )
    }
}

export default withRouter(TaskDetail);
