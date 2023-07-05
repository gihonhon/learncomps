import React from 'react';
import { Tilt } from 'react-tilt';
import { useNavigate } from 'react-router-dom';

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const customOptions = {
	reverse:        true,  // reverse the tilt direction
	max:            45,     // max tilt rotation (degrees)
	perspective:    1500,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.2,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          2000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           "X",   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.2,.8,.3, 1)",    // Easing on enter/exit.
}


const TiltButton = ({ imageUrl, tittle, path }) => {
  const navigate = useNavigate();
    return (
    <Tilt options={customOptions}>
        <div className='relative w-64 h-80 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-md rounded-xl overflow-hidden'>
            <img
            src={`https://i.pinimg.com/${imageUrl}`}
            alt=''
            className='w-full h-48 object-cover'
            />
            <div className='absolute bottom-0 left-0 right-0 p-4 text-white'>
                <h2 className='text-xl font-bold mb-2'>{tittle}</h2>
                <button onClick={() => navigate(`/${path}`)} className='px-4 rounded-lg bg-green-500 font-medium  text-white py-2 border my-2'>See More</button>
            </div>
        </div>
    </Tilt>
  )
}

export default TiltButton