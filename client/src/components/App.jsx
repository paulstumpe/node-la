import React from 'react';
import NavBar from './NavBar.jsx';
import Posts from './Posts/Posts.jsx';
import UserPosts from './Posts/UserPosts.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <br />
        <UserPosts />
      </div>
    )
  }
}

export default App;