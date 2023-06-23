import React from 'react'
import Battery from '../components/battery'

const BatteryStatus = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gradient-to-r from-slate-950 to-slate-900'>
        <Battery/>
    </div>
  )
}

export default BatteryStatus