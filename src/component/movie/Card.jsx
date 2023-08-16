import React from 'react'

const Card = ({ img }) => {
    return (
        <>

                <img className='h-auto w-[100px] sm:w-[255px] hover:scale-105 rounded-[10px] duration-150  ' src={img} alt="movie " />
        </>
    )
}

export default Card