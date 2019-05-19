import React, { Component } from 'react'

import SearchBar from './Application/SearchBar'
import Table from './Application/Table'

export default class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            searchCity: '',
            error: false,
            submitting: false,
        };
        this.onSearchCityChange = this.onSearchCityChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.fetchEvents = this.fetchEvents.bind(this)
    }

    onSearchCityChange = (event) => {
        this.setState({searchCity: event.target.value})
    }
    onSubmit = (event) => {
        const { searchCity } = this.state;
        this.fetchEvents(searchCity);
        event.preventDefault();
    }
    fetchEvents = (searchCity) => {
        const queryString = `city=${searchCity}`;
        fetch(`http://localhost:3001/api/events/?${queryString}`)
            .then(res => res.json())
            .then(data => { 
                this.setState({results: data, searchCity: ''})
                //console.log(data)
            })
            .catch(err => console.log(err));
    }
        
    render() {
        const { results, searchCity } = this.state
        return(
            <div className="container">
                <h1>Events Near You</h1>
                <SearchBar
                    city={searchCity}
                    onSearchCityChange={this.onSearchCityChange}
                    onSubmit={this.onSubmit}
                />
                <Table results={results}/>
            </div>
        )
    }
}