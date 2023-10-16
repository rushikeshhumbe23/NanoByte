import React, { useEffect, useState } from 'react';

interface TimerProps {
    initialDuration: number; 
}

const Timer: React.FC<TimerProps> = ({ initialDuration }) => {
    const [startTime, setStartTime] = useState<number | null>(null);
    const [elapsedTime, setElapsedTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    useEffect(() => {
        let timerId: NodeJS.Timeout;

        if (isRunning) {
            setStartTime(Date.now() - elapsedTime);
            timerId = setInterval(() => {
                setElapsedTime(Date.now() - (startTime || 0));
            }, 1000);
        }

        return () => {
            if (timerId) clearInterval(timerId);
        };
    }, [isRunning, elapsedTime, startTime]);

    useEffect(() => {
        if (elapsedTime >= initialDuration) {
            pauseTimer();
        }
    }, [elapsedTime, initialDuration]);

    const startTimer = () => {
        if (!isRunning && elapsedTime < initialDuration) {
            setIsRunning(true);
        }
    };

    const pauseTimer = () => {
        if (isRunning) {
            setIsRunning(false);
        }
    };

    const resetTimer = () => {
        setIsRunning(false);
        setElapsedTime(0);
        setStartTime(null);
    };

    const formatElapsedTime = () => {
        const remainingTime = initialDuration - elapsedTime;
        const seconds = Math.floor(remainingTime / 1000) % 60;
        const minutes = Math.floor(remainingTime / (1000 * 60)) % 60;
        const hours = Math.floor(remainingTime / (1000 * 60 * 60)) % 24;

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    // If remaining time is less than 1 minute
    const isLessThanOneMinute = initialDuration - elapsedTime < 60 * 1000;

    return (
        <div
            className={`max-w-xs mx-auto mt-10 bg-inherit rounded-lg shadow-lg p-4  ${isLessThanOneMinute ? 'text-red-600' : 'text-green-600'
                }`}
        >
            <p className="text-2xl font-semibold mb-4">{formatElapsedTime()}</p>
            <div className="flex space-x-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={startTimer}
                >
                    Start
                </button>

                <button
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    onClick={resetTimer}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Timer;