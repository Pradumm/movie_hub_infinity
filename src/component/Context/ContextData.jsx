import React, { useState, createContext } from 'react'
import axios from "axios"

export const ContextContainer = createContext()

const ContextData = ({ children }) => {


    const [input_search, setserch] = useState("")
    const [searchdata, setsearchdata] = useState([])

    const GetSerachdata = (e) => {
        setserch(e.target.value)
    }

    const searchmove = async (event) => {

        if (event.key === 'Enter') {

            await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3407e234e4eb43ed4e5f5f3ce456405c&query=${input_search}`).then((res) => {
                // let result = res.data.results
                console.log(res.data, "---------daraa")
                setsearchdata(res.data.results)
            })
        }
    }

    // useEffect(()=>{
    //       getApidata()
    // },[input_search])




    return <ContextContainer.Provider value={{ searchdata, input_search, GetSerachdata, searchmove }}>
        {children}
    </ContextContainer.Provider>
}

export default ContextData