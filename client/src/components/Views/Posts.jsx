import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import CreatePost from '../CreatePost.jsx';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    margin: 'auto',
    maxWidth: 700,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const Posts = ({ changeView, loggedIn, createPost, posts, changeCurrentPost }) => {
  //use given style from above
  const classes = useStyles();
  console.log(posts)
  return (
    <div className={classes.root}>
      {loggedIn ? <CreatePost className={classes.createPost} createPost={createPost} /> : null}
      {posts.map(post => 
      <p>
        <Paper className={classes.paper} elevation={3}>
          <Grid container spacing={3}>
            <Grid item>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                  <Typography gutterBottom id={post.id} variant="h5" style={{ cursor: 'pointer' }} 
                  onClick={() => { changeView("post"), changeCurrentPost(posts[post.id - 1]) }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2">{post.body}</Typography>
                  <Typography variant="body2"> 0 comments</Typography>
              </Grid>
                  <Typography variant="subtitle2" color="textSecondary">{post.createdAt}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </p>
      )}
    </div>
  );
}

export default Posts;