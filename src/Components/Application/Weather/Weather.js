import React, { Component } from 'react';

import { Collapsible, CollapsibleItem } from 'react-materialize';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

import withLoader from '../Loader/withLoader';

import clearNight from '../../../img/md-weather-iconset/weather-clear-night.png';
import cloudy from '../../../img/md-weather-iconset/weather-clouds.png';
import cloudyNight from '../../../img/md-weather-iconset/weather-clouds-night.png';
import sun from '../../../img/md-weather-iconset/weather-clear.png';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: this.props.city,
    };
    this.getDayOfWeek = this.getDayOfWeek.bind(this);
    //this.getWeatherReport = this.getWeatherReport.bind(this);
    this.getCurrentWeather = this.getCurrentWeather.bind(this);
    this.getWeeklyWeather = this.getWeeklyWeather.bind(this);
    this.getIcon = this.getIcon.bind(this);
  }

  getDayOfWeek = (day) => {
    return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][day % 7];
  }

  getCurrentWeather = () => {
    let today = new Date();
    let fullDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
    const { icon, humidity, temperature, precipProbability, summary } = this.props.weather.currently;
    return(
        <div className="current-weather-contain">
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid className="current-weather-itm" item >
                    <Typography gutterBottom variant="subtitle1">
                        {summary}
                    </Typography>
                    <img src={this.getIcon(icon)} alt="icon"/>
                </Grid>
                <Grid className="current-weather-itm" item>
                    <Typography variant="h5">
                        {fullDate}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Temperature: {temperature}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Humidity: {humidity}
                    </Typography>
                    <Typography variant="h5">
                        Chance of Rain: {precipProbability}%
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
  }

  getWeeklyWeather = () => {

  }

  getIcon = (icon) => {
      switch(icon) {
        case 'clear-night':
            return clearNight;
        case 'partly-cloudy-night':
            return cloudyNight;
        case 'partly-cloudy-day':
            return cloudy;
        case 'clear-day':
            return sun;
        default:
            return sun;
      }
      
  }

  /*
  getWeatherReport = () => {
    const { results } = this.props.weather.daily.data;
    results.map((val, idx) => {
        return (
        )
    })
  }
  */




  render() {
    const { weather } = this.props;
    
    if (weather) {
      return (
        <div className="weather">
          <Collapsible popout>
            <CollapsibleItem expanded header="Weather Forecast">
                {this.getCurrentWeather()}
            </CollapsibleItem>
          </Collapsible>
        </div>
      );
    } else {
      return (
        <div />
      );
    }
  }
}

export default withLoader(Weather);