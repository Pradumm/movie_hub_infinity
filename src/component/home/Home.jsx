import React from 'react'

import { BsGlobe } from "react-icons/bs"


import AccordionQutions from '../AccordionQutions'
import { Link } from 'react-router-dom'
const Home = () => {


    return (
        <>

            {/* <div>
                <MovieContent title={"Now_playing"} movie={movie} />
                <MovieContent title={"Upcoming Movies"} movie={upComingmovies} />
                <MovieContent title={"populer Movies"} movie={populerMovies} />
                <MovieContent title={"Tv Show"} />
            </div> */}


            <section className='w-[100%] h-[100vh] bg-cover bg-center bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/5eab1b22-c5ea-48b0-8ef4-862b3fa6df2c/4af43238-4df9-4946-9920-a4bd55f2e50b/IN-en-20230724-popsignuptwoweeks-perspective_alpha_website_medium.jpg")]'>
                <div className='w-[100%] h-[100vh] bg-[rgba(0,0,0,.5)]'>
                    <header className='max-w-[1170px] mx-auto items-center px-[10px]'>
                        <div className='grid grid-cols-2'>
                            <figure>
                                <img className='w-40' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

                            </figure>
                            <div className='flex justify-end items-center gap-[10px]'>
                                <div className='relative'>
                                    <BsGlobe className="text-white absolute top-[10px] left-[5px]" />
                                    <select className='text-white bg-black border px-[25px] py-[5px] rounded-[5px]'>
                                        <option value="English">English</option>
                                        <option value="hindi">hindi</option>
                                    </select>
                                </div>
                                <Link to="/movie" className='bg-red-600 text-white font-medium p-[5px_10px] rounded-[5px]'>Sign in</Link>

                            </div>
                        </div>
                    </header>

                    <div className='max-w-[1170px] mx-auto  px-[10px] text-center py-[50px] sm:py-[150px] text-white'>
                        <h1 className='text-[30px] sm:text-[50px]  font-bold'>Unlimited movies, TV shows and more</h1>
                        <h3 className='text-[22px] my-[20px] font-medium'>Watch anywhere. Cancel anytime.</h3>
                        <p className='text-[22px]  font-medium'>Ready to watch? Enter your email to create or restart your membership.</p>

                        <div className='max-w-[700px] mx-auto mt-[30px] sm:px-[10px] px-[40px]'>
                            <form action="" className='grid gap-[20px]  grid-cols-1 sm:grid-cols-[70%_auto]'>
                                <input className=' pl-[8px] border-[1px] border-gray-50  focus:outline-none bg-transparent h-[50px]' type="text" placeholder='Email Address' />
                                <Link to="/movie" className='bg-red-600 rounded-[5px]  hover:bg-red-800 duration-300 font-semibold py-[10px] text-[20px]'>Get Started</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-[100%] bg-black border-t-[8px] border-t-[#555555] py-[50px] sm:py-[50px] px-[10px]'>
                <div className='max-w-[1170px] mx-auto '>
                    <div className='grid sm:grid-cols-2 items-center '>
                        <div className='text-white text-center  sm:text-left'>
                            <h2 className='text-[40px] sm:text-[50px] font-bold'>Enjoy on your TV</h2>
                            <p className='text-[25px] mt-[20px]'>Watch on smart TVs, PlayStation, Xbox, Chromecast,
                                <br></br> Apple TV, Blu-ray players and more.</p>
                        </div>
                        <figure className='relative'>
                            <video controls autoplay
                                className='absolute bottom-[20%] w-[80%]  left-[10%] z-[1]'
                            >
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4">
                                </source>
                            </video>

                            <img
                                className=' relative z-[2]'
                                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
                        </figure>
                    </div>
                </div>
            </section>


            <section className='w-[100%] bg-black border-t-[8px] border-t-[#555555] py-[50px] sm:py-[100px] px-[10px]'>
                <div className='max-w-[1170px] mx-auto '>
                    <div className='grid sm:grid-cols-2 items-center '>

                        <figure className='relative order-2 sm:order-1'>
                            <img
                                className=' relative '
                                src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
                                alt='' />
                            <div className=' absolute border sm:w-[60%] w-[90%] bottom-[0px] text-white sm:left-[20%] left-[10%] border-gray-50 grid grid-cols-[70%_auto] items-center rounded-[15px] ' >
                                <div className='grid grid-cols-[30%_auto] items-center  gap-[10px] p-[10px]'>
                                    <img
                                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
                                    <div>
                                        <h3 className='font-bold text-[17px]'> Lorem </h3>
                                        <span className='text-blue-600 '>Downloding....</span>.
                                    </div>
                                </div>
                                <p>lol</p>
                            </div>
                        </figure>

                        <div className='text-white text-center order-1 sm:order-2  sm:text-left'>
                            <h2 className='text-[40px] sm:text-[50px] font-bold'>Download your shows to watch offline</h2>
                            <p className='text-[25px] mt-[20px]'>Save your favourites easily and always have something to watch.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className='w-[100%] bg-black border-t-[8px] border-t-[#555555] py-[50px] sm:py-[50px] px-[10px]'>
                <div className='max-w-[1170px] mx-auto '>
                    <div className='grid sm:grid-cols-2 items-center '>
                        <div className='text-white text-center  sm:text-left'>
                            <h2 className='text-[32px] sm:text-[50px] font-bold'>Watch everywhere</h2>
                            <p className='text-[25px] mt-[20px]'>Stream unlimited movies and TV shows on you
                                <br></br>phone, tablet, laptop, and TV.</p>
                        </div>
                        <figure className='relative'>
                            <video controls autoplay
                                className='absolute bottom-[40%] w-[60%]  left-[20%] z-[1]'
                            >
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4">
                                </source>
                            </video>

                            <img
                                className=' relative z-[2]'
                                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="" />
                        </figure>
                    </div>
                </div>
            </section>

            <section className='w-[100%] bg-black border-t-[8px] border-t-[#555555] py-[30px] sm:py-[40px] px-[10px]'>
                <div className='max-w-[1170px] mx-auto '>
                    <div className='grid sm:grid-cols-2 items-center '>

                        <figure className='relative order-2 sm:order-1'>
                            <img
                                className=''
                                src='https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d'
                                alt='' />

                        </figure>

                        <div className='text-white text-center order-1 sm:order-2  sm:text-left'>
                            <h2 className='text-[32px] sm:text-[50px] font-bold'>Create profiles for kids</h2>
                            <p className='text-[25px] mt-[20px]'>Send children on adventures with their favourite characters in a space made just for them—free with your membership..
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            <section className='w-[100%] bg-black border-t-[8px] border-b-[8px] border-b-[#555555]  border-t-[#555555] py-[50px] sm:py-[80px] px-[10px]'>
                <div className='max-w-[1170px] mx-auto '>
                    <h1 className=' text-center text-xl sm:text-5xl font-bold text-white mb-6 '>Frequently Asked Questions</h1>

                    <div className='max-w-[1000px] mx-auto bg-[#5e5c57] mb-[10px] text-white'>
                        <AccordionQutions
                            title=" What is Netflix?"
                            description="Netflix is a streaming service that offers a wide variety of award-winning TV shows,
                            movies, anime, documentaries and more – on thousands of internet-connected devices." />
                    </div>

                    <div className='max-w-[1000px] mx-auto bg-[#5e5c57] mb-[10px] text-white'>
                        <AccordionQutions
                            title="How much does Netflix cost?"
                            description="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts." />
                    </div>
                    <div className='max-w-[1000px] mx-auto bg-[#5e5c57] mb-[10px] text-white'>
                        <AccordionQutions
                            title="Where can I watch?"
                            description="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
                        />
                    </div>
                    <div className='max-w-[1000px] mx-auto bg-[#5e5c57] mb-[10px] text-white'>
                        <AccordionQutions
                            title="How do I cancel?"
                            description="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
                        />
                    </div>
                    <div className='max-w-[1000px] mx-auto bg-[#5e5c57] mb-[10px] text-white'>
                        <AccordionQutions
                            title="What can I watch on Netflix?"
                            description="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
                        />
                    </div>






                    <p className='text-[22px]   text-white text-center font-medium'>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className='max-w-[700px] mx-auto mt-[30px] sm:px-[10px] px-[40px]'>

                        <form action="" className='grid gap-[20px]  grid-cols-1 sm:grid-cols-[70%_auto]'>
                            <input className=' pl-[8px] border-[1px] border-gray-50  focus:outline-none bg-transparent h-[50px] text-white' type="text" placeholder='Email Address' />
                            <button className='bg-red-600 rounded-[5px]  hover:bg-red-800 duration-300 font-semibold py-[10px] text-white text-[20px]'>Get Started</button>
                        </form>
                    </div>

                </div>
            </section >

        </>
    )
}

export default Home