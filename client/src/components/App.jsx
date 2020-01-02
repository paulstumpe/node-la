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
      username: '',
      loggedIn: false,
      weather: {},
    };

    this.changeView = this.changeView.bind(this);
    this.updateLogin = this.updateLogin.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    //load the last 5 recent dogs on a refresh
    this.getWeather()
      .then(weather => {
        this.setState({
          weather: weather.data.currently,
        });
      })
      .catch(error => {
        console.error('Failed to get weather', error);
      });
  }

    //function to get the loacl weather on app startup
    getWeather() {
      return axios.get('/weather')
        .then(response => response.data)
        .catch(error => console.log(error))
    }

  //function to pass down to change views
  changeView(option) {
    this.setState({
      view: option,
    });
  }

  //function to change loggedIn state to show user posts
  updateLogin() {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  }

//TODO:send request to /posts endpoint to get all posts from db 
//as soon as the page mounts

  render() {
    const { view } = this.state;
    const { loggedIn } = this.state;
    return (
      <div>
        <NavBar 
          changeView={this.changeView} 
          loggedIn={this.loggedIn} 
          updateLogin={this.updateLogin} 
          loggedIn={this.state.loggedIn}
          weatherIcon={this.state.weather.icon}
        />
        <br />
        {(() => {
          switch (view) {
            case 'posts':
              return <Posts changeView={this.changeView} neighborhood={this.state.neighborhood} loggedIn={this.state.loggedIn}/>;
            case 'userPosts':
              return loggedIn ? <UserPosts changeView={this.changeView}/> 
              : <Typography variant="h4" style={{ fontWeight: "bolder", textAlign: "center", color: "white" }}>
                  Please Login to see your posts!
                </Typography>
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