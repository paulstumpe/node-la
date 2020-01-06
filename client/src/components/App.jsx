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
      weather: {},
      currentPost: {},
      posts: [],
      comments: [],
      userPosts: [],
      view: 'posts',
      loggedIn: false,
      username: '',
      userId: '',
      neighborhood: '',
    };

    this.userLogin = this.userLogin.bind(this);
    this.changeView = this.changeView.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.userSignUp = this.userSignUp.bind(this);
    this.createPost = this.createPost.bind(this);
    this.getComments = this.getComments.bind(this);
    this.updateLogin = this.updateLogin.bind(this);
    this.getAllPosts = this.getAllPosts.bind(this);
    this.getComments = this.getComments.bind(this);
    this.getUserPosts = this.getUserPosts.bind(this);
    this.createComment = this.createComment.bind(this);
    this.changeCurrentPost = this.changeCurrentPost.bind(this);
  }

  componentDidMount() {
    // get local weather for menu widget
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

  // function to get the loacl weather when app renders
  getWeather() {
    return axios.get('/weather')
      .then(response => response.data)
      .catch(error => console.log(error))
  }

  // function to get all posts from db to display in posts view
  getAllPosts() {
    return axios.get('/posts')
      .then(response => {
        this.setState({
          posts: response.data.data,
        })
      })
      .catch(error => console.log(error))
  }

  // function to get all posts from the signed in user and set username state
  getUserPosts(username) {
    this.setState({
      username: username,
    })
    return axios.get(`/usersposts`, {
      params: {
        'username': username
      }
    })
      .then(response => {
        this.setState({
          userPosts: response.data.data,
        })
      })
      .catch(error => console.log(error))
  }

  // function to load user info into state
  userLogin(username) {
    return axios.get(`/users/${username}`)
      .then(response => {
        this.setState({
          userId: response.data.data[0].id,
        })
      })
      .catch(error => console.log(error))
  }

  // function to save new username to the db and set username state
  userSignUp(username) {
    this.setState({
      username: username,
    })
    return axios.post('/signup', {
      'username': username,
    })
      .then(response => response)
      .catch(error => console.log(error))
  }

  // function to create a new post and save it to the db
  createPost(title, body, neighborhood, type) {
    return axios.post('/posts', {
      'title': title,
      'hoodName': neighborhood,
      'postType': type,
      'postBody': body,
      'username': this.state.username,
    })
      .then(response => response)
      .catch(error => console.log(error))
  }

  // function to create a new post
  createComment(postId, comment){
    return axios.post('/comments', {
      'postId': postId,
      'userId': this.state.userId,
      'commentBody': comment,
      'commentVotes': 0,
    })
      .then(response => response)
      .catch(error => console.log(error))
  }

  // function to store all current comments in state for main post view
  getComments(id){
    return axios.get('comments', {
      params: {
        postId: id
      }
    })
      .then(response => {
        this.setState({
          comments: response.data.data,
        })
      })
    .catch(error => console.log(error))
  }

  // function to change views
  changeView(option) {
    this.setState({
      view: option,
    });
  }

  // function to change currentPost state for main post view
  changeCurrentPost(post) {
    this.setState({
      currentPost: post
    })
  }
  
  // function to change loggedIn state to show user their posts and sign out button
  updateLogin() {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  }
  
  render() {
    console.log(this.state.comments);
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
          userLogin={this.userLogin}
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
                getComments={this.getComments}
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
              createComment={this.createComment}
              comments={this.state.comments}
              />;
          }
        })()}
      </div>
    )
  }
}

export default App;