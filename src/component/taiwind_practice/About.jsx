import React, { useState, useEffect } from 'react';

const About = () => {
    const [time, setTime] = useState(25);
    const [score, setScore] = useState(0);
    const [hits, setHits] = useState(0);
    const [hittime, setHittime] = useState(true);

    const [bubbleitem, setbubbleitme] = useState([])
      
    useEffect(() => {
        multibubble()
        Random();
    }, []);

    function Random() {
        setHits(Math.floor(Math.random() * bubbleitem.length));
    }


    useEffect(() => {
        Timer();
        // Random();  // Comment this line to prevent calling Random() with the timer
    }, []);

    function Timer() {
        let timeInterval = setInterval(() => {
            setTime(prevTime => {
                if (prevTime > 0) {
                    return prevTime - 1;
                } else {
                    clearInterval(timeInterval);
                    setHittime(false); // Ensure time remains at 0
                }
            });
        }, 2000);
    }

    function multibubble() {
        const cluster = [];

        for (let i = 1; i <= 96; i++) {
            let number = Math.floor(Math.random() * 100)
            cluster.push(number);
        }

        setbubbleitme(cluster)
    }

    function handleBubbleClick(event) {
        let bubbleValue = Number(event.target.textContent);

        if (bubbleValue === hits) {
            setScore(prevScore => prevScore + 10);
            Random();
        }
    }

    return (
        <>
            <div className='max-w-[800px] flex justify-evenly items-center mx-auto bg-green-400 h-[100px] px-5'>
                Shoot <div className='w-[50px] h-[50px] flex justify-center items-center bg-white'>{hits}</div>
                Time <div id='timeitem' className='w-[50px] h-[50px] flex justify-center items-center bg-white'>{time}</div>
                Score <div className='w-[50px] h-[50px] flex justify-center items-center bg-white'>{score}</div>
            </div>

            <div id='row' className='max-w-[800px] flex flex-wrap gap-3 mx-auto bg-black h-[80vh] px-5 py-2  mb-2'>
                {hittime ? bubbleitem.map((item, index) => {
                    return (
                        <button key={index} className='w-[50px] h-[50px] flex justify-center items-center rounded-full bg-white' onClick={handleBubbleClick}>
                            {item}
                        </button>
                    )
                })

                    : <>
                        <h1 className='text-[50px] text-center text-white'>Game Over</h1>
                    </>}
            </div>
        </>
    );
};

export default About;
