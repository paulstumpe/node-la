import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
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

const UserPosts = ({ changeView }) => {
  //use given style from above
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Grid container spacing={4}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXY6uYdm-iBKQlGcl0WYSRDPb7SVeeSX032XIen9AnHLDaS2mM" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5" style={{ cursor: 'pointer' }} onClick={() => { changeView("post") }}>
                  Post Title
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Post placeholder text
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  0 comments
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" color="textSecondary">Post Time</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <br />
      <Paper className={classes.paper} elevation={3}>
        <Grid container spacing={4}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6sho5g9jVbQWZgZiwNZw-vZCo66DZMXJeCoByYs70RN5TM1Hg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5" style={{ cursor: 'pointer' }} onClick={() => { changeView("post") }}>
                  Post Title
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Post placeholder text
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  0 comments
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" color="textSecondary">Post Time</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <br />
      <Paper className={classes.paper} elevation={3}>
        <Grid container spacing={4}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIH0e4LpBqQY0AvBTc5-QDZgcYabrxJFNS1hOZLOVbJ40SzILy" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5" style={{ cursor: 'pointer' }} onClick={() => { changeView("post") }}>
                  Post Title
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Post placeholder text
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  0 comments
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" color="textSecondary">Post Time</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default UserPosts;