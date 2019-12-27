import React from 'react';
import NavBar from './NavBar.jsx';
import Posts from './Posts/Posts.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <br />
        <Posts />
      </div>
    )
  }
}

export default App;