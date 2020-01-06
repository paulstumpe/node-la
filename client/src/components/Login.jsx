import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Login = ({ updateLogin, userSignUp, userLogin, getUserPosts }) => {
  const classes = useStyles();
  //user react hooks to set temp state of username
  const [open, setOpen] = React.useState(false);
  const [usernameValue, setUsernameValue] = useState('')

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // console.log(usernameValue);

  return (
    <div className={classes.root}>
          {/* Login button */}
          <Button variant="contained" color="secondary" onClick={handleOpen}> Login </Button>
          {/* dialog box for loging in */}
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title"> Login </DialogTitle>
            {/* text fields in dialog box */}
            <DialogContent>
          <TextField id="username" label="Username" type="username" 
            value={usernameValue}
            onChange={(e) => setUsernameValue(e.target.value)} fullWidth />
              <TextField id="password" label="Password" type="password" fullWidth />
            </DialogContent>
            {/* buttons in dialog box */}
            <DialogActions>
              <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={() => { handleClose(); updateLogin(); userLogin(usernameValue); getUserPosts(usernameValue) }} color="primary">Login</Button>
          <Button onClick={() => { handleClose(); updateLogin(); userSignUp(usernameValue); }} color="primary">Sign Up</Button>
            </DialogActions>
          </Dialog>
    </div>
  );
}

export default Login;