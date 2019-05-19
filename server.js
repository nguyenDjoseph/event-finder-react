const TMAPI = require('tm-api')
const DarkSky = require('dark-sky')
const geocoder = require('geocoder')


const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const darksky = new DarkSky(process.env.DARK_SKY_SECRET_KEY)
TMAPI.setAPIKey(process.env.TICKETMASTER_API_KEY)
TMAPI.setSecret(process.env.TICKETMASTER_SECRET_KEY)

const baseAPI = '/api/';


app.get(`${baseAPI}weather`, (req,res)=> {

})

app.get(`${baseAPI}events`, (req,res)=> {
    const { city } = req.query;
    TMAPI.events.search({city: city})
        .then(results => { 
            res.json(results.data._embedded.events) 
        })
        .catch(err=> res.json(err));
})

/*
const params = {
    city: 'los angeles'
}

let getEvents = async (params) => {
    let results = await TMAPI.events.search(params);
    console.log(results.data);
}

geocoder.geocode("Irvine", (err, data) => {
    const {lat, lng} = data.results[0].geometry.location



}, {key: process.env.GOOGLE_API});
/*
let getWeather = async () => {
    let results = await darksky.options({
        latitude: 37.8267,
        longitude: -122.423,
        time: '2019-01-10',
        language: 'en',
        exclude: ['minutely', 'daily'],
        extendHourly: true
    })
    .get()
    .then(console.log)
}
*/
/*
darksky
    .coordinates({lat: 37.8267, lng: -122.423})
    .units('ca')
    .language('en')
    .exclude('minutely,daily')
    .get()
    .then(console.log)
    .catch(console.log)
*/
//getEvents(params);

app.listen(3001, () => console.log('Express server is running on localhost:3001'))