import React from 'react';
import moment from 'moment';
import Comment from '../Comment.jsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    margin: 'auto',
    maxWidth: 700,
  },
  comment: {
    padding: theme.spacing(1),
    margin: 'auto',
    maxWidth: 500,
  },
  button: {
    background: 'linear-gradient(45deg, #00796b 30%, #43a047 90%)',
    borderRadius: 4,
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  alignItemsAndJustifyContent: {
    width: 'auto',
    height: 60,
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Post = ({ changeView, currentPost, createComment, comments, loggedIn }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        {/* Button to go back to all posts */}
      <div className={classes.alignItemsAndJustifyContent}>
        <p><Button className={classes.button} style={{ fontWeight: "bolder" }} 
          onClick={() => { changeView("posts") }}> Back To Posts </Button></p>
      </div>
      {/* Main post container */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <p><Paper className={classes.paper}>
            <Typography variant="h3" style={{ fontWeight: "bolder", textAlign: "center" }}>{currentPost.title}</Typography>
            <Typography variant="h6" color="primary" style={{ fontWeight: "bolder", textAlign: "right" }}>Username</Typography>
            <Typography variant="subtitle2" color="textSecondary" style={{ textAlign: "right" }}>{moment(currentPost.createdAt).fromNow()}</Typography>
            <Typography variant="h6">{currentPost.postBody}</Typography>
          </Paper></p>
        </Grid>
        {/* Button with dialog box for adding comments*/}
        {loggedIn ? <Comment currentPost={currentPost} createComment={createComment} /> : null}
        {/* Comment layout goes here */}
        {comments.map(comment => 
        <Grid item xs={12}>
          <Paper className={classes.comment}>
            <Typography variant="h6" color="primary" style={{ fontWeight: "bolder" }}>Username</Typography>
              <Typography variant="subtitle2" color="textSecondary">{moment(comment.createdAt).fromNow()}</Typography>
            <Typography variant="body2">{comment.commentBody}</Typography>
          </Paper>
        </Grid>
          )}
      </Grid>
    </div>
  );
}

export default Post;