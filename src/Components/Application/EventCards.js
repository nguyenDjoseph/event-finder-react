import React from 'react';

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    cardtitle: {
        fontSize: '1.15em',
        fontWeight: '600'
    }
});

const priceConverter = price => {
    if (price) {
        if (price[0].max > 50 && price[0].max <= 100) return '$$';
        if (price[0].max > 100 && price[0].max <= 500) return '$$$';
        if (price[0].max > 500) return '$$$$';
    }
    return '$$$$'
}

const EventCards = ({eventName, eventUrl, eventDesc,eventImg, eventVenue, eventDates, eventTimes, eventPrice}) => {
    const classes = useStyles();
    return (
        <Grid item md={4} sm={12}>
            <Card className="card">
                <CardActionArea>
                    <CardMedia component="img" image={eventImg}/>
                    <CardContent>
                        <Typography className={classes.cardtitle} gutterBottom component="h2">
                            {
                                eventName.length > 50 ? `${eventName.substring(0,50)}...` : eventName
                            }
                        </Typography>
                        <Typography variant="body2" color="textPrimary" component="p">
                            Date: {eventDates}
                            <br/>
                            Venue: {eventVenue}
                            <br/>
                            Price: {priceConverter(eventPrice)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        <a href={eventUrl}>Learn More</a>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};


/*
const EventCards = ({eventName, eventUrl, eventDesc,eventImg}) => 
*/

export default EventCards