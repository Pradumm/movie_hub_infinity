import { useState, useEffect } from 'react';

const useTimer = (initialTime, interval) => {
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTime(prevTime => {
                if (prevTime > 0) {
                    return prevTime - 1;
                } else {
                    clearInterval(timerInterval);
                    return 0;
                }
            });
        }, interval);

        return () => {
            clearInterval(timerInterval);
        };
    }, [interval]);

    return time;
};

export default useTimer;
