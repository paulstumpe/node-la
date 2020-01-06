import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  button: {
    background: 'linear-gradient(45deg, #00796b 30%, #43a047 90%)',
    borderRadius: 4,
    color: 'white',
    height: 48,
    padding: '0 20px',
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

const Comment = ({ currentPost, createComment }) => {
  const classes = useStyles();
  // react hook to set open and close state of dialog box and comment body
  const [open, setOpen] = React.useState(false);
  const [comment, setCommentValue] = React.useState('');
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
        <Button className={classes.button} onClick={handleOpen}> Comment </Button>
      </div>
      {/* dialog box for loging in */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-comment"> Leave a comment! </DialogTitle>
        {/* text field in dialog box */}
        <DialogContent>
          <TextField id="comment" label="Comment" type="comment" value={comment} 
          onChange={(e) => setCommentValue(e.target.value)} multiline rows="4" fullWidth />
        </DialogContent>
        {/* buttons in dialog box */}
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={ () => {handleClose(); createComment(currentPost.id, comment) }} color="primary">Comment</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Comment;