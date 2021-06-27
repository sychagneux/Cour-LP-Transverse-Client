# Cour-LP-React-PWA

Create a mutation 

[This file implement a mutation](https://github.com/pipic1/Cour-LP-Transverse-Client/blob/client-7-mutation/my-app/src/component/project/ProjectCreate.js)

We gonna use the component useMutation

Creation of the mutation, that you can run on the playground (localhost:5000)

``` js
const ADD_PROJECT = gql`
  mutation CreateProject($name: String! ,$description: String!) {
    createProject(name: $name, description: $description)
  }
`;
```

Create a hooks React, and make it return a form, you can implement many type of input.
[This page can help](https://fr.reactjs.org/docs/forms.html)

In it you can create variables, that permit to stock information from the input:

``` js
function AddProject() {
    let name;
    let description;
    const [addProject, { data }] = useMutation(ADD_PROJECT);

    return ( YOUR FORM HERE );
```

On your form tag, you will re-implement is onSubmit event: 

``` html
    <form
      onSubmit={e => {
        e.preventDefault();
        addProject({ variables: { name: name.value, description: description.value } });
        name.value = '';
        description.value = '';
      }} >
      
      Your input, you need to add reference to the variable created before on the hooks.
      <input>      
      <input>      
      <input>
      
   </form>
>
```

To see your mutation simply, call it in a render's component function.

``` js
class ProjetDetail extends Component {
  render() {
    return (
      <div className="container">
        <h4>Create a new project</h4>
        <AddProject />
      </div>
    );
  }
}

```
