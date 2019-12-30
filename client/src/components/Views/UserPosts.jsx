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
    maxWidth: 500,
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

const UserPosts = () => {
  //use given style from above
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="img" src="https://images.homedepot-static.com/productImages/b8079873-ecf3-49f8-87bf-476b5f24c4d7/svn/just-add-ice-house-plants-262768-64_400_compressed.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5" style={{ cursor: 'pointer' }}>
                  Post Title 1
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Post 1 placeholder text
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