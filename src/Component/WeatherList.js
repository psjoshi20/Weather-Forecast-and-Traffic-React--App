import React from 'react'
import { Col, Row } from 'react-bootstrap'
import WeatherCard from './WeatherCard'
const WeatherList = ({weathers}) => {
    return (
        <Row>
            {weathers.map(({dt, forecasts, weather}) => {
              <Col key ={dt}>
                <WeatherCard 
                   high={forecasts.high}
                   low={forecasts.low}
                   dt={dt*1000}
                   forecast={weather[0].forecasts}
                   icon={weather[0].icon}
                />
              </Col>
            })}
        </Row>
    )
}

export default WeatherList;