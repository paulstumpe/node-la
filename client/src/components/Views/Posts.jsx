import React from 'react';
import moment from 'moment';
import CreatePost from '../CreatePost.jsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    margin: 'auto',
    maxWidth: 700,
  },
}));

const Posts = ({ changeView, loggedIn, createPost, posts, changeCurrentPost, getComments }) => {
  //use given style from above
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* If logged in, show an 'add post' button */}
      {loggedIn ? <p><CreatePost className={classes.createPost} createPost={createPost}/></p> : null}
      {/* Contaner for each post */}
      {posts.map((post, index) => 
      <p>
        <Paper className={classes.paper} elevation={3}>
          <Grid container spacing={3}>
            <Grid item>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                  <Typography gutterBottom id={index} variant="h5" style={{ cursor: 'pointer' }} 
                  onClick={() => { changeView("post"), changeCurrentPost(posts[index]), getComments(post.id) }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2">{post.body}</Typography>
                  <Typography variant="body2" style={{ color: '#00796b', fontWeight: "bolder"}}>{post.user.username}</Typography>
              </Grid>
                <Typography variant="subtitle2" color="textSecondary">{moment(post.createdAt).fromNow()}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </p>
      )}
    </div>
  );
}

export default Posts;