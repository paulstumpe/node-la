import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClearDay from './images/weatherImages/ClearDay.png'
import ClearNight from './images/weatherImages/ClearNight.png'
import CloudyDay from './images/weatherImages/CloudyDay.png'
import CloudyNight from './images/weatherImages/CloudyNight.png'
import Fog from './images/weatherImages/Fog.png'
import Rain from './images/weatherImages/Rain.png'
import Snow from './images/weatherImages/Snow.png'

const useStyles = makeStyles(theme => ({
  img: {
    maxWidth: 80,
    maxHeight: 60,
  },
}));

const WeatherIcon = ({ icon }) => {
  const classes = useStyles();
  return (
    <div>
      {/* Weather icon changes depending on status from api */}
      {(() => {
        switch (icon) {
          case 'cloudy':
            return <img className={classes.img} src={CloudyDay} alt="icon" />;
          case 'clear-night':
            return <img className={classes.img} src={ClearNight} alt="icon" />;
          case 'partly-cloudy-night':
            return <img className={classes.img} src={CloudyNight} alt="icon" />;
          case 'partly-cloudy-day':
            return <img className={classes.img} src={CloudyDay} alt="icon" />;
          case 'fog':
            return <img className={classes.img} src={Fog} alt="icon" />;
          case 'rain':
            return <img className={classes.img} src={Rain} alt="icon" />;
          case 'snow':
            return <img className={classes.img} src={Snow} alt="icon" />;
          default:
            return <img className={classes.img} src={ClearDay} alt="icon" />;
        }
      })()}
    </div>
  );
}

export default WeatherIcon;