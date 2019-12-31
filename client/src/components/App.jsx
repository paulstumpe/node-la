import React from 'react';
import NavBar from './NavBar.jsx';
import Posts from './Views/Posts.jsx';
import UserPosts from './Views/UserPosts.jsx';
import Neighborhoods from './Views/Neighborhoods.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'posts'
    };

    this.changeView = this.changeView.bind(this);
  }

  //function to pass down to change views
  changeView(option) {
    this.setState({
      view: option,
    });
  }

//TODO:send request to /posts endpoint to get all posts from db 
//as soon as the page mounts

  render() {
    const { view } = this.state;
    return (
      <div>
        <NavBar changeView={this.changeView}/>
        <br />
        {(() => {
          switch (view) {
            case 'posts':
              return <Posts />;
            case 'userPosts':
              return <UserPosts />;
            case 'neighborhoods':
              return <Neighborhoods />;
            default:
              return <Posts />;
          }
        })()}
      </div>
    )
  }
}

export default App;