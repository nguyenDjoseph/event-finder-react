const TMAPI = require('tm-api');
const DarkSky = require('dark-sky');
const geocoder = require('geocoder');

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}

const darksky = new DarkSky(process.env.DARK_SKY_SECRET_KEY)
TMAPI.setAPIKey(process.env.TICKETMASTER_API_KEY)
TMAPI.setSecret(process.env.TICKETMASTER_SECRET_KEY)

const baseAPI = '/api/';

//Trying out async/await

app.get(`${baseAPI}weather`, (req,res)=> {
    const { city } = req.query;
    geocoder.geocode(city, async(err, data) => {
        const { lat, lng} = await data.results[0].geometry.location;
        // darksky api call
        const forecast = await darksky.options({latitude: lat,longitude: lng}).get().catch(err => res.json(err));
        res.status(200).json(forecast);
    }, {key: process.env.GOOGLE_API});
})

app.get(`${baseAPI}events`, (req,res)=> {
    const { city } = req.query;
    TMAPI.events.search({city: city})
        .then(results => {
            res.json(results.data._embedded.events) 
        })
        .catch(err => res.json(err));
})


app.listen(3001, () => console.log('Express server is running on localhost:3001'))