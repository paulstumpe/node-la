import React from 'react';
//style imports for all material ui 
import { makeStyles } from '@material-ui/core/styles';
//all component imports needed for navbar
import { Button } from '@material-ui/core';
//all component imports needed for login dialog box
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

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
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
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

  const [hood, setHood] = React.useState('');

  const inputLabel = React.useRef(null);

  const handleChange = event => {
    setHood(event.target.value);
  };

  //console.log(hood);
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

          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Neighborhood</InputLabel>
            {/* selection for neighborhoods */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={hood}
              onChange={handleChange}
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