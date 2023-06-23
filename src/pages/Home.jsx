import React from 'react'
import { useNavigate } from 'react-router-dom'
import TiltButton from '../components/TiltButton'

const Home = () => {
    const navigate = useNavigate()
  return (
    <>
            <section className='grid grid-cols-6 mx-10 my-10 gap-y-2 '>
                {comp.map((item, i) => (
                    <TiltButton key={i} tittle={item.title} image='/logocom.png' path={item.path}/>
                        // <div key={i} className='flex flex-col shadow-md rounded-lg px-4 py-8 mx-2 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg'>
                        //     <div className='flex justify-center'>
                        //         <img
                        //         src='/logocom.png'
                        //         alt='content'
                        //         className='w-26 '
                        //         />
                        //     </div>
                        // <div className='flex flex-col items-start my-1 mx-2'>
                        //     <h1 className='font-semibold text-white text-lg'>{item.title}</h1>
                        //     <button onClick={() => navigate(`/${item.path}`)} className='px-4 rounded-lg bg-green-500 font-medium  text-white py-2 border my-2'>See More</button>
                        // </div>
                        // </div>
                ))}
            </section>
    </>
  )
}

const comp = [
    {
        title: 'Battery Status',
        urlImage: '/battery.jpg',
        path: 'batterystatus'
    },
    {
        title: 'React Tilt',
        urlImage: '/reacttilt.png',
        path: 'reacttilt'
    },
    {
        title: 'Battery Status',
        urlImage: '/battery.jpg',
        path: 'batterystatus'
    },
    {
        title: 'React Tilt',
        urlImage: '/reacttilt.png',
        path: 'reacttilt'
    },
    {
        title: 'Battery Status',
        urlImage: '/battery.jpg',
        path: 'batterystatus'
    },
    {
        title: 'React Tilt',
        urlImage: '/reacttilt.png',
        path: 'reacttilt'
    },

]

export default Home