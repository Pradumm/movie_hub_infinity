import React, { useState } from 'react'

import Netflix from "../../assets/Netflix-Logo.png";
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { ContextContainer } from '../Context/ContextData';
const NavBar = () => {

    const [isOpen, setIsOpen] = useState(true);

    const { GetSerachdata, input_search, searchmove } = useContext(ContextContainer)

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>

            <nav class=" text-white border-gray-200 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                    <figure>
                        <img className='w-40' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

                    </figure>

                    <button data-collapse-toggle="navbar-default" type="button"

                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-expanded="false"
                        onClick={toggleNavbar}
                    >

                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    <input
                        value={input_search}
                        onChange={GetSerachdata}
                        type='text'
                        onKeyPress={searchmove}
                        placeholder="Search for movies..."
                        className='border px-4 py-2 rounded-full focus:outline-none text-black'
                    />



                    <div class={`${isOpen ? "hidden" : ""} w-full md:block md:w-auto`}>
                        <ul class=" bg-blue-950 sm:bg-transparent font-medium font-serif flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg capitalize  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to="/" class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500">Home</Link>
                            </li>
                            <li>
                                <Link to="/movie" class="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500" >movie </Link>
                            </li>
                            <li>
                                <Link to="/movie" class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Tv Show</Link>
                            </li>
                            <li>
                                <Link to="/movie" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Netflix Quiz</Link>
                            </li>
                            <li>
                                <Link to="/movie" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                            </li>
                        </ul>
                    </div>



                </div>
            </nav>

        </>
    )
}

export default NavBar