# Cour-LP-React-PWA

Client 4 - GraphQL first query 

We gonna get the first query from our server.


Since the last release apollo use react hooks to check query on use mutation 

All these information are explained here :

https://www.apollographql.com/docs/react/api/react-hooks/

On your `Home.js`, import the `useQuery` component.

``` js
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
```

We gonna make an exemple to check if graphql work with the client ( the server has to be started ).

On your server, you need to have a simple query, that return a boolean, or a string, just to check the data transfer



``` js
const GET_GRAPHQL_INFO = gql`
  {
    userSchemaAssert
  }
`;
```

Create your hooks, it will return juste a little html component that display the error.


``` js 

// Your first graphql hooks
function CheckConfig() {
  const { loading, error, data, networkStatus } = useQuery(GET_GRAPHQL_INFO);

  if (loading) return <span className="status-warning">LOADING</span>;
  if (error) return <span className="status-error">ERROR</span>;
  return <span className="status-ok">OK</span>;
}


class HomePage extends Component {	

  ```

To call your hooks, call it just like a regular component

``` js
  <p>
  GraphQL status: <CheckConfig />
  </p>  
```  

If it display Ok, your connection with our server works ! if not.. 

