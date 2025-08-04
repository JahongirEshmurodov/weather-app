import React from 'react'
import { getDay, getIcon } from '../helpers'

function Day({day}) {
  return (
    <div className='day'>
        <h3 className="day__name">{getDay(day.dt, 'weekday')}</h3>
        <p className="day__number">{getDay(day.dt, 'day')} {getDay(day.dt, 'month')}</p>
        <img src={getIcon(day.weather[0].main)} alt="" className="day__img" />
        <p className="day__temp-day">{Math.round(day.temp.day)}°</p>
        <p className="day__temp-night">{Math.round(day.temp.night)}°</p>
        <p className="day__descr">{day.weather[0].description}</p>
    </div>
  )
}

export default Day