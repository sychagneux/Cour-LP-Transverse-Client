import React, { Component } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { useMutation } from "@apollo/react-hooks";
import { IoIosClose } from "react-icons/io";
import { FaPlusSquare } from "react-icons/fa";

const GET_USER = gql`
  query Users($id: ID!) {
    user(_id: $id) {
      _id
      name
      surname
      pseudo
    }
  }
`;
const DELETE_USER = gql`
  mutation deleteUser($_id: ID!) {
    deleteUser(_id: $_id)
  }
`;

function Users({ arg, id }) {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id }
  });
  const [deleteUser] = useMutation(DELETE_USER);

  function arrayRemove(arr, value) { 
    return arr.filter(function(ele){ 
        return ele._id != value; 
    });
  }

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <h4>
        {data.user}
      </h4>
    </div>
  );
}

class ProfilPage extends Component {
  render() {
    return (
      <div className="container">
        <h4>Profil</h4>
        <Users arg={this.props} />
      </div>
    );
  }
}
//<Users arg={this.props} id={this.props.match.params.id}/>
export default ProfilPage;
