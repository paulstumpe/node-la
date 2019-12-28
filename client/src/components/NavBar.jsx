import React from 'react';
//style imports for all material ui css
import { makeStyles } from '@material-ui/core/styles';
//all component imports needed for navbar
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
//all material icon imports
import MenuIcon from '@material-ui/icons/Menu';
//all component imports needed for login dialog box
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

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

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* menu button */}
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          {/* app title */}
          <Typography variant="h5" className={classes.title}> Node.LA </Typography>
          {/* Login button */}
          <Button variant="contained" color="secondary" onClick={handleOpen}> Login </Button>
          {/* dialog box for loging in */}
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title"> Login </DialogTitle>
            {/* text fields in dialog box */}
            <DialogContent>
              <TextField id="username" label="Username" type="username" fullWidth />
              <TextField id="password" label="Password" type="password" fullWidth />
            </DialogContent>
            {/* buttons in dialog box */}
            <DialogActions>
              <Button onClick={handleClose} color="primary">Cancel</Button>
              <Button onClick={handleClose} color="primary">Login</Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;