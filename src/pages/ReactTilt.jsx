import React from 'react'
import TiltReact from '../components/TiltReact'

const ReactTilt = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gradient-to-r from-slate-950 to-slate-900'>
        <TiltReact image='/reacttilt.png' tittle="hello world" description="just tilt in react"/>
    </div>
  )
}

export default ReactTilt