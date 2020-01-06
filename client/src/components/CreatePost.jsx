import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl, Select, InputLabel, MenuItem } from '@material-ui/core';
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

const CreatePost = ({ createPost }) => {
  const classes = useStyles();
  //handle state of dialog box being open or closed
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //react hook to set temporary state
  const [hood, setHood] = React.useState('');
  const [type, setType] = React.useState('');
  const [title, setTitleValue] = React.useState('');
  const [body, setBodyValue] = React.useState('');
  //handle state change of neighborhood type
  const handleHoodChange = event => {
    setHood(event.target.value);
  };
  //handle state change of post type
  const handleTypeChange = event => {
    setType(event.target.value);
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
          <TextField id="title" label="Title" type="title" value={title} onChange={(e) => setTitleValue(e.target.value)}fullWidth />
          <TextField id="body" label="Body" type="body" value={body} onChange={(e) => setBodyValue(e.target.value)} multiline rows="5" fullWidth />
          {/* selection for neighborhoods */}
          <FormControl className={classes.formControl}>
            <InputLabel id="hood-select-label">Neighborhood</InputLabel>
            <Select
              labelId="hood-select-label"
              id="hood-select"
              value={hood}
              onChange={handleHoodChange}
            >
              <MenuItem value={'BayouStJohn'}>Bayou St. John</MenuItem>
              <MenuItem value={'Bywater'}>Bywater</MenuItem>
              <MenuItem value={'Carrollton'}>Carrollton</MenuItem>
              <MenuItem value={'CBD'}>Central Business District</MenuItem>
              <MenuItem value={'Downtown'}>Downtown</MenuItem>
              <MenuItem value={'Fountainbleu'}>Fountainbleu</MenuItem>
              <MenuItem value={'FQ'}>French Quarter</MenuItem>
              <MenuItem value={'LGD'}>Lower Garden District</MenuItem>
              <MenuItem value={'Lakeview'}>Lakeview</MenuItem>
              <MenuItem value={'Marigny'}>Marigny</MenuItem>
              <MenuItem value={'MidCity'}>Mid City</MenuItem>
              <MenuItem value={'Riverbend'}>Riverbend</MenuItem>
              <MenuItem value={'Treme'}>Treme</MenuItem>
              <MenuItem value={'Uptown'}>Uptown</MenuItem>
              <MenuItem value={'WestBank'}>West Bank</MenuItem>
            </Select>
          </FormControl>
          {/* Selection for type of post */}
          <FormControl className={classes.formControl}>
            <InputLabel id="type-select-label">Post Type</InputLabel>
            <Select
              labelId="type-select-label"
              id="type-select"
              value={type}
              onChange={handleTypeChange}
            >
              <MenuItem value={'gen'}>General</MenuItem>
              <MenuItem value={'help'}>Informative</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        {/* buttons at bottom of dialog box */}
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={() => {handleClose(); createPost(title, body, hood, type)}} color="primary">Post</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreatePost;