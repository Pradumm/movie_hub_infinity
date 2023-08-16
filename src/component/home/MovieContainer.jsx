import React, { useEffect, useState } from 'react'
import axios from "axios"
import MovieContent from "../movie/MovieContent"
import NavBar from '../header/NavBar'
const MovieContainer = () => {

    let Api_key = "&api_key=3407e234e4eb43ed4e5f5f3ce456405c"
    let base_key = "https://api.themoviedb.org/3"

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
            <NavBar />
            <div className='py-20 flex  flex-col '>
                <MovieContent title={"Now playing"} movie={movie} />
                <MovieContent title={"Upcoming Movies"} movie={upComingmovies} />
                <MovieContent title={"populer Movies"} movie={populerMovies} />
            </div>
            {/* <MovieContent title={"Tv Show"} /> */}
        </div>
    )
}

export default MovieContainer