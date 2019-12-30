import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
}));

const Posts = () => {
  //use given style from above
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <strong>Post 1 Title</strong>
            <br />
            <small>Post 1 placeholder text here</small>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <strong>Post 2 Title</strong>
            <br />
            <small>Post 2 placeholder text here</small>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <strong>Post 3 Title</strong>
            <br />
            <small>Post 3 placeholder text here</small>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <strong>Post 4 Title</strong>
            <br />
            <small>Post 4 placeholder text here</small>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <strong>Post 5 Title</strong>
            <br />
            <small>Post 5 placeholder text here</small>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Posts;