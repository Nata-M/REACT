import React from 'react';

class Users extends React.Component {
    // constructor() {
    //     super();
    
    //     this.state = {users: []};
    // }
    // fetchUsers() {
    //     // Where we're fetching data from
    //     fetch(`https://jsonplaceholder.typicode.com/users`)
    //       // We get the API response and receive data in JSON format...
    //       .then(response => response.json())
    //       // ...then we update the users state
    //       .then(data =>
    //         this.setState({
    //           users: data,
    //           isLoading: false,
    //         })
    //       )
    //       // Catch any errors we hit and update the app
    //       .catch(error => this.setState({ error, isLoading: false }));
    //   }
      render() {
        return (
            <div className="App">
                <h1>Users Page</h1>
            </div>
        )
      } 
    }
    export default Users;
