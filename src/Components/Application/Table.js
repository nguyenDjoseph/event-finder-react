import React from 'react'

import EventCards from './EventCards'
import { Row, Col } from 'react-materialize'

const Table = ({results}) => {
    return (
        <Row>
        { results.map((item,idx) => 
                <EventCards 
                    key={idx} index={idx}
                    eventName={item.name}
                    eventUrl={item.url}
                    eventImg={item.images[4].url}
                />
        )
        }
        </Row>
    )
}

export default Table;