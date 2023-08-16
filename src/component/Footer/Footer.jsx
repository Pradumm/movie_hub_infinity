import React from 'react'

import { BsGlobe } from "react-icons/bs"
const Footer = () => {
    return (
        <>
            <footer className='w-[100%] bg-black text-white py-[30px]'>
                <div className="max-w-[1170px] mx-auto ">

                    <p className='mb-8 text-gray-300 font-semibold'>Questions? Call 000-800-919-1694</p>

                    <div className="grid sm:grid-cols-3 ">
                        <div>
                            <ul>
                                <li className='p-1 underline'><a href='' >FAQ</a></li>
                                <li className='p-1 underline'><a href='' >Investor Relations</a></li>
                                <li className='p-1 underline'><a href='' >Privacy</a></li>
                                <li className='p-1 underline'><a href='' > Speed Test</a></li>

                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className='p-1 underline'><a href='' >Help Centre</a></li>
                                <li className='p-1 underline'><a href='' > Jobs</a></li>
                                <li className='p-1 underline'><a href='' >Cookie Preferences</a></li>
                                <li className='p-1 underline'><a href='' >Legal Notices</a></li>

                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className='p-1 underline'><a href='' > Account</a></li>
                                <li className='p-1 underline'><a href='' > Ways to Watch</a></li>
                                <li className='p-1 underline'><a href='' >Corporate Information</a></li>
                                <li className='p-1 underline'><a href='' >Only on Netflix</a></li>

                            </ul>

                        </div>
                     
                        
 
                    </div>

                    {/* <div className='ms-4 mt-5'>
                        <div class="dropdown">
                            <button class="btn border-secondary  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span><BsBrowserChrome /> Netflix</span>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                            </ul>
                        </div>
                        <p className='mt-3'>Netflix india</p>
                    </div> */}

                    <div className=' relative py-5'>
                        <BsGlobe className="text-white absolute top-[30px] left-[5px]" />
                        <select className='text-white bg-black border px-[25px] py-[5px] rounded-[5px]'>
                            <option value="English">English</option>
                            <option value="hindi">hindi</option>
                        </select>
                    </div>

                    <p className='text-white font-semibold'>Netflix India</p>
                </div>
            </footer>

        </>
    )
}

export default Footer