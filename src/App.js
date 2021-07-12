import logo from './logo.svg';
import React, { Component } from 'react';
import Users from './components/Users';
import Userform from './components/Userform';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          users: []
      }
  }

  handleAddUser = (newUser) => {
      this.setState({ 
          users: [newUser, ...this.state.users] 
      })
  }

  render() {
      const users = this.state.users.map((user, index) => {
          return (
              <Users user={user} index={index} />
          )
      })

      return (
          <div style={{ margin: "50px" }}>
              <Userform addUser={this.handleAddUser} />
              {users}
          </div>
      );
  }
}



export default App;
