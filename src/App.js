import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar'
import Users from './components/users/Users'

class App extends Component {
  state = {
    users: [
      {
        "login": "mojombo",
        "id": 1,
        "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
        "html_url": "https://github.com/mojombo"
      },
      {
        "login": "defunkt",
        "id": 2,
        "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
        "html_url": "https://github.com/defunkt",
      },
      {
        "login": "pjhyett",
        "id": 3,
        "avatar_url": "https://avatars.githubusercontent.com/u/3?v=4",
        "html_url": "https://github.com/pjhyett",
      }
    ]
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
