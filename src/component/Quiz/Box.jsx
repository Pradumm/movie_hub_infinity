
import React, { useState } from 'react'
import { ContextContainer } from '../Context/ContextData'
import { useContext } from 'react'
const Box = () => {
    const [current, setcurrent] = useState(0)
    const [ans, setans] = useState(0)
    const [result, setresult] = useState(false)

    const { dataQue, setdataQue } = useContext(ContextContainer);

    let option = dataQue[current].options
    let finalans = dataQue[current].correctOption

    console.log(dataQue)

    function handleoption(event) {
        let optinValue = (event.target.textContent);
        console.log(optinValue)

        if (optinValue === finalans) {
            setans((ans) => ans + 1)
        }
    }

    function NextOption() {
        if (current < dataQue.length - 1) {
            setcurrent(current + 1)
            // setresult(true)
        }
        else {

            setresult(true)

        }

    }

    return (
        <>

            <div className='w-[500px] mx-auto px-5 shadow-lg h-[400px] bg-slate-300 border py-3 pt-5'>

                {
                    !dataQue || dataQue.length === 0 ? "kkd" : <>
                        <p className='text-[22px] mb-[10px]'>   {dataQue[current].id} {dataQue[current].question}</p>
                        <div className='grid grid-cols-2 gap-5' >

                            {
                                option.map((option, index) => {
                                    return (
                                        <div className='cursor-pointer'>
                                            <span className=''>{index + 1}</span>
                                            <span onClick={handleoption}
                                                className='ml-2'>{option}</span>
                                        </div>
                                    )
                                })
                            }


                        </div>


                        <div className='flex justify-between items-center px-3 mt-8'>
                            <div className='bg-blue-400 px-6 rounded-md py-2 text-white cursor-pointer'>Pre</div>
                            <div
                                onClick={NextOption}

                                className='bg-green-500 px-6 rounded-md py-2 text-white cursor-pointer'>Save & Next</div>
                            <div className='bg-red-500 px-6 rounded-md py-2 text-white cursor-pointer'>Exit</div>
                        </div>


                        <div className='mt-12'>


                            {
                                result ? <p>Your correct ans is {ans} of {dataQue.length} </p> : null
                            }
                        </div></>


                }

            </div>
        </>
    )
}

export default Box