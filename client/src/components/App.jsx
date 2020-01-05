import React from 'react';
import axios from 'axios';
import NavBar from './NavBar.jsx';
import Posts from './Views/Posts.jsx';
import UserPosts from './Views/UserPosts.jsx';
import Neighborhoods from './Views/Neighborhoods.jsx';
import Post from './Views/Post.jsx';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'posts',
      neighborhood: '',
      posts: [],
      currentPost: {},
      userPosts: [],
      username: '',
      loggedIn: false,
      weather: {},
    };

    this.changeView = this.changeView.bind(this);
    this.updateLogin = this.updateLogin.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.getAllPosts = this.getAllPosts.bind(this);
    this.userSignUp = this.userSignUp.bind(this);
    this.createPost = this.createPost.bind(this);
    this.getUserPosts = this.getUserPosts.bind(this);
    this.changeCurrentPost = this.changeCurrentPost.bind(this);
  }

  componentDidMount() {
    // get local weather
    this.getWeather()
      .then(weather => {
        this.setState({
          weather: weather.data.currently,
        });
      })
      .catch(error => {
        console.error('Failed to get weather', error);
      });
    // set posts state with all posts from db
    this.getAllPosts()
      .catch(error => {
        console.error('Failed to get posts', error);
      });
  }

  // function to get the loacl weather on app startup
  getWeather() {
    return axios.get('/weather')
      .then(response => response.data)
      .catch(error => console.log(error))
  }

  // function to get all posts from db
  getAllPosts() {
    return axios.get('/posts')
      .then(response => {
        this.setState({
          posts: response.data.data,
        })
      })
      .catch(error => console.log(error))
  }

  // function to get all posts from the signed in user
  getUserPosts(username) {
    this.setState({
      username: username,
    })
    return axios.get(`/usersposts`, {
      params: {
        'username': `${username}`
      }
    })
      .then(response => {
        this.setState({
          userPosts: response.data.data,
        })
      })
      .catch(error => console.log(error))
  }

  // function to save username to db and set username state
  userSignUp(username) {
    this.setState({
      username: username,
    })
    return axios.post('/signup', {
      'username': `${username}`,
    })
      .then(response => response)
      .catch(error => console.log(error))
  }

  // function to create a new post and save to the db
  createPost(title, body, neighborhood, type) {
    return axios.post('/posts', {
      'title': `${title}`,
      'hoodName': `${neighborhood}`,
      'postType': `${type}`,
      'postBody': `${body}`,
      'username': `${this.state.username}`,
    })
      .then(response => response)
      .catch(error => console.log(error))
  }


  // function to pass down to change views
  changeView(option) {
    this.setState({
      view: option,
    });
  }

  // function to change currentPost state
  changeCurrentPost(post) {
    this.setState({
      currentPost: post
    })
  }
  
  // function to change loggedIn state to show user posts and sign out button
  updateLogin() {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  }
  
  render() {
    const { view } = this.state;
    const { loggedIn } = this.state;
    return (
      <div>
        {/* NavBar component for all navigation and logging in */}
        <NavBar 
          loggedIn={this.state.loggedIn}
          weatherInfo={this.state.weather}
          weatherIcon={this.state.weather.icon}
          changeView={this.changeView} 
          updateLogin={this.updateLogin} 
          userSignUp={this.userSignUp}
          getUserPosts={this.getUserPosts}
        />
        {/* Post view changes base on state */}
        {(() => {
          switch (view) {
            // posts view shows all posts
            case 'posts':
              return <Posts 
                changeView={this.changeView}
                loggedIn={this.state.loggedIn} 
                createPost={this.createPost}
                posts={this.state.posts}
                changeCurrentPost={this.changeCurrentPost}
                />;
            // userPosts shows posts from the user once logged in
            case 'userPosts':
              return (
                loggedIn ? <UserPosts changeCurrentPost={this.changeCurrentPost} changeView={this.changeView} userPosts={this.state.userPosts}/> 
              : <Typography variant="h4" style={{ fontWeight: "bolder", textAlign: "center", color: "white" }}>
                  Please Login to see your posts!
                </Typography>)
            // neighborhoods shows posts based on what neighborhood is selected
            case 'neighborhoods':
              return <Neighborhoods changeView={this.changeView} />;
            // post view shows the post clicked on with it's comments
            case 'post':
              return <Post
              changeView={this.changeView}
              currentPost={this.state.currentPost}
              />;
          }
        })()}
      </div>
    )
  }
}

export default App;