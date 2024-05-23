import React from 'react'

const MovieCard = ({movie, star}) => {
  return (
    <>
        <div className='w-[22rem] h-[450px] shadow-lg shadow-gray-600 rounded-lg'>
            <img src={movie.cover} alt={movie.title}  className='h-[55vh] w-[100%] rounded-t-lg'/>
            <div className='p-2'>
                <h1 className='text-3xl text-blue-950'>{movie.title}</h1>
                <p className='text-gray-600'>Rating : {star}</p>
            </div>
        </div>

    </>
  )
}

export default MovieCard