import React from 'react'
import Card from './Card'
import "./moviecontent.css"
let img_path = "https://image.tmdb.org/t/p/w500"
const MovieContent = ({ title, movie }) => {
    console.log(movie, "_______dk")

    return (
        <>
            <div className=''>
                <h2 className=' text-[25px] sm:text-[30px] text-white border-b-[8px] border-t-[#555555] leading-[50px] capitalize px-2'>{title}</h2>
                <div className='flex gap-[14px] py-5 overflow-x-auto  scrollbar-hidden '>
                    { 
                        movie.map((movie, index) => {
                            return (
                                <Card img={img_path + movie.poster_path} />
                            )
                        })
                    }


                </div>

            </div>
        </>
    )
}

export default MovieContent