import React from 'react';

import { Row, Col, TextInput, Button } from 'react-materialize';

const SearchBar = ({city, onSearchCityChange, onSubmit}) => 
    <div className="search">
        <Row>
            <form onSubmit={onSubmit} className="col s12">
                <TextInput s={12} m={10} 
                    type="text" value={city} 
                    onChange={onSearchCityChange} 
                    placeholder="City" />
                <Col s={12} m={2}>
                    <Button floating large className="red" icon="search" waves="light" />
                </Col>
            </form>
        </Row>
    </div>

export default SearchBar