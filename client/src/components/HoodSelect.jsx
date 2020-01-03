import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
  },
}));

const HoodSelect = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('neighborhood');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Neighborhood</FormLabel>
        <RadioGroup aria-label="neighborhood" name="neighborhood" value={value} onChange={handleChange}row>
          <FormControlLabel value="uptown" control={<Radio />} label="Uptown" />
          <FormControlLabel value="downtown" control={<Radio />} label="Downtown" />
          <FormControlLabel value="bywater" control={<Radio />} label="Bywater" />
          <FormControlLabel value="riverbend" control={<Radio />} label="Riverbend" />
        </RadioGroup>
        <RadioGroup aria-label="neighborhood" name="neighborhood" value={value} onChange={handleChange} row>
          <FormControlLabel value="french-quarter" control={<Radio />} label="French Quarter" />
          <FormControlLabel value="lgd" control={<Radio />} label="LGD" />
          <FormControlLabel value="mid-city" control={<Radio />} label="Mid City" />
          <FormControlLabel value="marigny" control={<Radio />} label="Marigny" />
        </RadioGroup>
        <RadioGroup aria-label="neighborhood" name="neighborhood" value={value} onChange={handleChange} row>
          <FormControlLabel value="treme" control={<Radio />} label="Treme" />
          <FormControlLabel value="west-bank" control={<Radio />} label="West Bank" />
          <FormControlLabel value="lakeview" control={<Radio />} label="Lakeview" />
          <FormControlLabel value="cbd" control={<Radio />} label="CBD" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default HoodSelect;