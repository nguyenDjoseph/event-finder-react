import React, { Component } from 'react'
import Container from '@material-ui/core/Container'

import SearchBar from './Application/SearchBar'
import Table from './Application/Table'
import Weather from './Application/Weather/Weather'

export default class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            weatherResults: null,
            searchCity: '',
            isCardLoading: false,
        };
        this.onSearchCityChange = this.onSearchCityChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.fetchEvents = this.fetchEvents.bind(this)
        this.fetchWeather = this.fetchWeather.bind(this)
    }

    onSearchCityChange = event => {
        this.setState({searchCity: event.target.value})
    }
    onSubmit = event => {
        this.setState({ isCardLoading: true});
        const { searchCity } = this.state;
        this.fetchWeather(searchCity);
        this.fetchEvents(searchCity);
        event.preventDefault();
    }

    fetchEvents = searchCity => {
        const queryString = `city=${searchCity}`;
        fetch(`http://localhost:3001/api/events/?${queryString}`)
            .then(res => res.json())
            .then(data => {
                setTimeout(() => this.setState({isCardLoading: false}), 2000);
                this.setState({searchCity: '', results: data})
            })
            .catch(err => console.log(err));
    }
    fetchWeather = searchCity => {
        const queryString = `city=${searchCity}`;
        fetch(`http://localhost:3001/api/weather/?${queryString}`)
            .then(res => res.json())
            .then(data => { 
                this.setState({...this.state, weatherResults: data})
            })
            .catch(err => console.log(err));
    }
        
    render() {
        const { isCardLoading } = this.state;
        const { results, searchCity } = this.state
        const { weatherResults } = this.state
        return(
            <Container maxWidth="md">
                <h1 className="header">Events Near You</h1>
                <SearchBar
                    city={searchCity}
                    onSearchCityChange={this.onSearchCityChange}
                    onSubmit={this.onSubmit}
                />
                <Weather weather={weatherResults}/>
                <Table cityName={searchCity} isLoading={isCardLoading} results={results}/>
            </Container>
        )
    }
}