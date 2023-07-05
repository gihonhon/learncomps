import React from 'react'
import { useNavigate } from 'react-router-dom'
import TiltButton from '../components/TiltButton'

const Home = () => {
    const navigate = useNavigate()
  return (
    <>
            <section className='grid grid-cols-6 mx-10 my-10 gap-y-2 '>
                {comp.map((item, i) => (
                    <TiltButton key={i} tittle={item.title} imageUrl={item.urlImage} path={item.path}/>
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
        urlImage: '564x/60/5e/46/605e461ca634e868085d1a3d9d02b1ea.jpg',
        path: 'batterystatus'
    },
    {
        title: 'React Tilt',
        urlImage: '564x/dc/92/1e/dc921ec2e07f9437dc51f2a10694578d.jpg',
        path: 'reacttilt'
    },
    {
        title: 'Interactive Sign Form',
        urlImage: '564x/26/c7/35/26c7355fe46f62d84579857c6f8c4ea5.jpg',
        path: 'signinteraact'
    },
    {
        title: 'Typed Animation',
        urlImage: '564x/8c/4a/51/8c4a51e005629a084505649079b0a949.jpg',
        path: 'typedanim'
    },
    {
        title: 'Battery Status',
        urlImage: '564x/2d/cf/63/2dcf63c23e359dd5fec6ced32d4d8805.jpg',
        path: 'batterystatus'
    },
    {
        title: 'React Tilt',
        urlImage: '564x/da/12/42/da1242d7310df90039a0feb26f7c4444.jpg',
        path: 'reacttilt'
    },

]

export default Home