# Cour-LP-React-PWA

This part add some improvment to the app 

Add a `NavBar` component, that permit to navigate between routes.

Also add a `SideBar`, that open a panel and display all route

For example, you can use the state of the component to control an open dialog, and a button to toggle it.

``` js
  this.state={
    navbarOpen: false
  }
```

An exemple of a function that permit to toggle a boolean from the `state`

``` js
  toggleNavbar(){
    this.setState({
      navbarOpen: !this.state.navbarOpen
    })
  }
``` 

You can also add some style to display correctly these component.