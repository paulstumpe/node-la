import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const WeatherStuff = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        Hello
      </Paper>
    </div>
  );
}

export default WeatherStuff;