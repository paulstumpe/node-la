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
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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
      <Button variant="contained" color="secondary" onClick={handleOpen}> Create Post </Button>
      {/* dialog box for loging in */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"> Create a post! </DialogTitle>
        {/* text fields in dialog box */}
        <DialogContent>
          <TextField id="title" label="Title" type="title" fullWidth />
          <TextField id="body" label="Body" type="body" fullWidth />
        </DialogContent>
        {/* buttons in dialog box */}
        <DialogActions>
          <Button onClick={() => { handleClose }} color="primary">Cancel</Button>
          <Button onClick={handleClose} color="primary">Post</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreatePost;