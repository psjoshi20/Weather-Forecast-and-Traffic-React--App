import React from 'react'
import { Col, Row } from 'react-bootstrap'
import WeatherCard from './WeatherCard'


// "forecasts": [
//     {
//       "temperature": {
//         "low": 24,
//         "high": 34
//       },
//       "date": "2021-02-27",
//       "forecast": "Fair.",
//       "relative_humidity": {
//         "low": 60,
//         "high": 90
//       },
//       "wind": {
//         "speed": {
//           "low": 10,
//           "high": 20
//         },
//         "direction": "NW"
//       },
//       "timestamp": "2021-02-27T00:00:00+08:00"
//     },

const WeatherList = ({weathers}) => {
    return (
        <Row>
            {weathers.map(({dt, forecasts}) => {
              <Col key ={dt}>
                <WeatherCard 
                   high={forecasts.high}
                   low={forecasts.low}
                   dt={dt*1000}
                //    forecast={weather[0].forecasts}
                //    icon={weather[0].icon}
                />
              </Col>
            })}
        </Row>
    )
}

export default WeatherList;