import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WeatherStuff from './WeatherStuff.jsx';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Weather = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ListItemIcon>
            <WbCloudyIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Weather" />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <WeatherStuff />
          {/* <Typography>
            Weather Info Here
          </Typography> */}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default Weather;