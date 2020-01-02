import React from 'react';
import axios from 'axios';
import NavBar from './NavBar.jsx';
import Posts from './Views/Posts.jsx';
import UserPosts from './Views/UserPosts.jsx';
import Neighborhoods from './Views/Neighborhoods.jsx';
import Post from './Views/Post.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'posts',
      neighborhood: 'uptown',
      posts: [],
      currentPost: {},
      loggedIn: false,
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
        <NavBar changeView={this.changeView} loggedIn={this.loggedIn} />
        <br />
        {(() => {
          switch (view) {
            case 'posts':
              return <Posts changeView={this.changeView} neighborhood={this.state.neighborhood} />;
            case 'userPosts':
              return <UserPosts changeView={this.changeView} />;
            case 'neighborhoods':
              return <Neighborhoods changeView={this.changeView} />;
            case 'post':
              return <Post changeView={this.changeView} />;
            default:
              return <Posts changeView={this.changeView} />;
          }
        })()}
      </div>
    )
  }
}

export default App;