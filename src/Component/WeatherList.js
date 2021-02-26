import React from 'react'
import { Col, Row } from 'react-bootstrap'
import WeatherCard from './WeatherCard'
const WeatherList = ({weathers}) => {
    return (
        <Row>
            {weathers.map(({dt, forecast, weather}) => {
              <Col key ={dt}>
                <WeatherCard 
                   high={forecast.high}
                   low={forecast.low}
                   dt={dt*1000}
                   forecast={weather[0].forecast}
                   icon={weather[0].icon}
                />
              </Col>
            })}
        </Row>
    )
}

export default WeatherList;