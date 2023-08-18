
import React, { useContext, useState } from 'react'

import { ContextContainer } from '../Context/ContextData';
import Box from './Box';

const QuizContainer = () => {

    const [start, setstart] = useState(true)


    return (
        <>

            <div className='flex justify-center items-center h-screen'>
                {/* <p className=''> Star your Quiz</p> */}

                {
                    start ?
                        <button  onClick={()=>setstart(false)}
                        className='text-center text-[32px] px-3 rounded-md font-serif bg-yellow-300'>Start</button>
                        :
                        <Box />
                }



            </div>


        </>
    )
}


export default QuizContainer


