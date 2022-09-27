import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar'
import Users from './components/users/Users'
import axios from 'axios'

class App extends Component {
  state = {
    users: []
  }

  async componentDidMount(){
    const response = await axios.get(`${process.env.REACT_APP_GITHUB_API}/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({users: response.data})
  }

  render(){
    return (
      <div className="App">
        <Navbar />
        <div className='container'>
          <Users users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
