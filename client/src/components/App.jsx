import React from 'react';
import axios from 'axios';
import NavBar from './NavBar.jsx';
import Posts from './Views/Posts.jsx';
import UserPosts from './Views/UserPosts.jsx';
import Neighborhoods from './Views/Neighborhoods.jsx';
import Post from './Views/Post.jsx';
import Typography from '@material-ui/core/Typography';



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
    this.updateLogin = this.updateLogin.bind(this);
  }

  //function to pass down to change views
  changeView(option) {
    this.setState({
      view: option,
    });
  }

  updateLogin() {
    this.setState({
      loggedIn: true,
    });
  }

//TODO:send request to /posts endpoint to get all posts from db 
//as soon as the page mounts

  render() {
    console.log(this.state.loggedIn)
    const { view } = this.state;
    const { loggedIn } = this.state;
    return (
      <div>
        <NavBar changeView={this.changeView} loggedIn={this.loggedIn} updateLogin={this.updateLogin} />
        <br />
        {(() => {
          switch (view) {
            case 'posts':
              return <Posts changeView={this.changeView} neighborhood={this.state.neighborhood} />;
            case 'userPosts':
              return loggedIn ? <UserPosts changeView={this.changeView}/> 
              : <Typography variant="h4" style={{ fontWeight: "bolder", textAlign: "center", color: "white" }}>
                  Please Login to see your posts!
                </Typography>
              // <UserPosts changeView={this.changeView} />;
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