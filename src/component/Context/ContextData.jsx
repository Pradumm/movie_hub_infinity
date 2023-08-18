import React, { useState, createContext } from 'react'

import { data } from "../../component/Quiz/Data"

export const ContextContainer = createContext()

const ContextData = ({ children }) => {

    const [dataQue, setdataQue] = useState(data)

    return <ContextContainer.Provider value={{dataQue, setdataQue}}>
        {children}
    </ContextContainer.Provider>
}

export default ContextData