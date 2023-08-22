import React, { useEffect, useState } from 'react'
import axios from "axios"
import MovieContent from "../movie/MovieContent"
import NavBar from '../header/NavBar'
import Rating from 'react-rating-stars-component';
const MovieContainer = () => {

    // let Api_key = "&api_key=3407e234e4eb43ed4e5f5f3ce456405c"
    let img_path = "https://image.tmdb.org/t/p/w500"

    let base_key = "http://api.themoviedb.org/3"

    let now_playing = "now_playing"
    let upcoming = "upcoming";
    let Populer = "popular";

    const [movie, setmovie] = useState([])
    const [upComingmovies, setupcomingmovies] = useState([])
    const [populerMovies, setpopulerMovies] = useState([])

    const getApidata = async () => {
        await axios.get(`${base_key}/movie/${now_playing}/?api_key=3407e234e4eb43ed4e5f5f3ce456405c`).then((res) => {
            let result = res.data.results
            console.log(result, "_________result")
            setmovie(result)
        })
    }
    const getupcomingMovies = async () => {
        await axios.get(`${base_key}/movie/${upcoming}/?api_key=3407e234e4eb43ed4e5f5f3ce456405c`).then((res) => {
            let result = res.data.results
            console.log(result, "_________result")
            setupcomingmovies(result)
        })
    }
    const getpopulerMovies = async () => {
        await axios.get(`${base_key}/movie/${Populer}/?api_key=3407e234e4eb43ed4e5f5f3ce456405c`).then((res) => {
            let result = res.data.results
            setpopulerMovies(result)
        })
    }

    // console.log(movie, "_______mo")
    useEffect(() => {
        getApidata()
        getupcomingMovies()
        getpopulerMovies()
    }, [])

    return (
        <div className=''>
            <div className=" h-[80vh] bg-center bg-cover bg-no-repeat " style={{ backgroundImage: `url(${img_path + movie[4]?.poster_path})` }}>
                <NavBar />


                <div class="  sm:w-max-[70%] md:max-w-[50%] ml-2 md:ml-16 mt-8">
                    <h2 className='text-[30px] text-blue-600 sm:text-[45px] font-serif'>{movie[4]?.title}</h2>
                    <p class="text-white font-medium  my-[10px]">{movie[4]?.overview}</p>
                    <p class="text-gray-300 my-[10px] text-sm">Release_date:  {movie[4]?.release_date}   <span className='py-2 px-5 bg-blue-950 ml-2 text-white'>{movie[4]?.original_language}</span></p>
                    <Rating
                        count={10} // Total number of stars
                        value={3} // Rating value (7.5 in this case)
                        size={24} // Size of the stars
                        activeColor="#f5b01b" // Color of active stars
                        edit={false}
                        // Disable user interaction
                    />
                    <button className='px-5 py-2 mt-5 bg-blue-950 text-white font-serif capitalize font-bold'>watch Now </button>

                </div>
            </div>
            <div className=' pt-10 pb-20 flex flex-col px-3 bg-black'>
                <MovieContent title={"Now playing"} movie={movie} />
                <MovieContent title={"Upcoming Movies"} movie={upComingmovies} />
                <MovieContent title={"populer Movies"} movie={populerMovies} />
            </div>
            {/* <MovieContent title={"Tv Show"} /> */}
        </div>
    )
}

export default MovieContainer