import React from 'react';
//style imports for all material ui 
import MenuList from './MenuList.jsx';
import Login from './Login.jsx'
import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* menu button */}
          <MenuList />
          {/* app title */}
          <Typography variant="h5" className={classes.title}>  Node.LA </Typography>
          {/* Login button */}
          <div variant="contained" color="secondary"> 
            <Login />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;