import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ img, movie }) => {
    // const moviedetails = { movie, original_title }

    // const movieData = encodeURIComponent(JSON.stringify(movie));
    // console.log(movie,"cardd-__")

    return (
        <>
            <div className='w-[200px] overflow-hidden'>
                <img className=' object-cover hover:scale-105 rounded-[2px] duration-150  ' src={img} alt="movie " />
            </div>
        </>

    )
}

export default Card