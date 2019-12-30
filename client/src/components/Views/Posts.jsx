import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
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

const Posts = () => {
  //use given style from above
  const classes = useStyles();
  return (
    <div className={classes.root}>
      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={3}>
            <Typography variant="h5" style={{ cursor: 'pointer' }} onClick={() => { changeView("post") }}>Post Title</Typography>
            <Typography variant="body2">Post placeholder text here</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={3}>
            <Typography variant="h5" style={{ cursor: 'pointer' }}>Post Title</Typography>
            <Typography variant="body2">Post placeholder text here</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={3}>
            <Typography variant="h5" style={{ cursor: 'pointer' }}>Post Title</Typography>
            <Typography variant="body2">Post placeholder text here</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" style={{ cursor: 'pointer' }}>Post Title</Typography>
            <Typography variant="body2">Post placeholder text here</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" style={{ cursor: 'pointer' }}>Post Title</Typography>
            <Typography variant="body2">Post placeholder text here</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" style={{ cursor: 'pointer' }}>Post Title</Typography>
            <Typography variant="body2">Post placeholder text here</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" style={{ cursor: 'pointer' }}>Post Title</Typography>
            <Typography variant="body2">Post placeholder text here</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" style={{ cursor: 'pointer' }}>Post Title</Typography>
            <Typography variant="body2">Post placeholder text here</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Posts;