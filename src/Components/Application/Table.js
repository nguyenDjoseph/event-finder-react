import React from 'react'
import EventCards from './EventCards'
import Grid from '@material-ui/core/Grid'
import withLoader from './Loader/withLoader';


const Table = ({results}) => {
    if (results && results.length > 0) {
        return (
            <div className="cards-container">
            <Grid container spacing={1}>
                { results.map((item,idx) => 
                    <EventCards 
                        key={idx} index={idx}
                        eventName={item.name}
                        eventVenue={item._embedded.venues[0].name}
                        eventUrl={item.url}
                        eventImg={item.images[4].url}
                        eventDates={item.dates.start.localDate}
                        eventTimes={item.dates.start.localTime}
                        eventPrice={item.priceRanges}
                    />
                )}
            </Grid>
            </div>
        )
    } else {
        return(<div/>)
    }
}

export default withLoader(Table);