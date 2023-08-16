import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

import { Collapse } from 'react-collapse';


const AccordionQutions = ({title, description }) => {

    const [open, setopen] = useState(false)

    const toggle = () => {
        setopen(!open)
    }

    return (
        <>
            <div className='  pl-[10px] py-2 border my-2'>
                <div className='flex items-center cursor-pointer' onClick={toggle}>
                    <span >{open ? <AiOutlineMinus className='text-2xl mr-2' /> : <AiOutlinePlus className='text-2xl mr-2' />}</span>
                    <span className='text-[22px]'>{title}</span>
                </div>

                <Collapse isOpened={open}>
                    <div className='text-white text-[16px] p-4 cursor-pointer origin-top duration-300 ' >
                        <p className='mb-[10px]'>{description}</p>
                        <p className='mb-[10px]'>{description}</p>
                       
                    </div>
                </Collapse>
            </div>
        </>
    )
}

export default AccordionQutions