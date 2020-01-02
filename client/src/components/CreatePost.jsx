import React from 'react';
//style imports for all material ui 
import { makeStyles } from '@material-ui/core/styles';
//all component imports needed for navbar
import { Button } from '@material-ui/core';
//all component imports needed for login dialog box
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    background: 'linear-gradient(45deg, #00796b 30%, #43a047 90%)',
    borderRadius: 4,
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  title: {
    flexGrow: 1,
  },
  alignItemsAndJustifyContent: {
    width: 'auto',
    height: 60,
    display: 'flex',
    justifyContent: 'center',
  },
}));

const CreatePost = () => {
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
      {/* Login button */}
      <div className={classes.alignItemsAndJustifyContent}>
          <Button className={classes.button} onClick={handleOpen} style={{fontWeight:"bolder"}}> Create Post </Button>
        </div>
      {/* dialog box for loging in */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"> Create a post! </DialogTitle>
        {/* text fields in dialog box */}
        <DialogContent>
          <TextField id="title" label="Title" type="title" fullWidth />
          <TextField id="body" label="Body" type="body" multiline rows="5" fullWidth />
        </DialogContent>
        {/* buttons in dialog box */}
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleClose} color="primary">Post</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreatePost;