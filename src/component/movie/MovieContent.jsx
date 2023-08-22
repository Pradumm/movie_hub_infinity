import React from 'react'
import Card from './Card'
import "./moviecontent.css"
import { Link } from 'react-router-dom'
let img_path = "https://image.tmdb.org/t/p/w500"
const MovieContent = ({ title, movie }) => {
    console.log(movie, "_______dk")



    return (
        <>
            <div className=''>
                <h2 className='  font-serif text-[25px] sm:text-[30px] text-white leading-[50px] capitalize px-2'>{title}</h2>
                <div className='flex gap-[14px] py-5 overflow-x-auto  scrollbar-hidden '>
                    {
                        movie.map((moviex, index) => {

                            return (
                                <Link 
                                    to="/singlemovie" state={{ moviex: moviex }}

                                >
                                    <Card img={img_path + moviex.poster_path} movie={moviex.id} />
                                </Link>
                            )
                        })
                    }
                    {/* moviex.original_title moviex.poster_path moviex.vote_average  */}

                </div>

            </div>
        </>
    )
}

export default MovieContent