import React, { useContext } from 'react'
import Day from './Day'
import { Context } from '../context/Context'

function Week() {
  const { data, loading,error } = useContext(Context)
  if(error || loading ) return ''
  return (
    <div className='week'>
      {
        data.daily.filter((day , index) => index != 0).map((day, index) => <Day key={index} day={day} />)
      }
    </div>
  )
}

export default Week