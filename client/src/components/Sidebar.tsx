import React, { useState, useRef, useCallback, useEffect } from 'react';
import Webcam from 'react-webcam';
import Timer from './Timer';
import { useSearchParams } from 'react-router-dom';

const Sidebar = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [isStarted, setIsStarted] = useState<boolean>(false);
    const initialCategory = searchParams.get("category");

    const [category, setcategory] = useState<string>(initialCategory || '');

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setcategory(e.target.value);
    };



    const WebcamComponent: React.FC = () => {
        const webcamRef = useRef<Webcam>(null);
        const capture = useCallback(() => {
            const imageSrc = webcamRef.current?.getScreenshot();
            // Do something with the captured image, e.g., upload it or display it.
            console.log(imageSrc);
        }, []);


        return (
            <div className='py-10 px-10 bg-gray-800 items-center'>
                <Webcam
                    className='rounded-md'
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                />
                {/* <button className='my-10  rounded py-2 px-8 bg-orange-700 text-slate-400 flex items-center gap-1' onClick={capture}>Capture</button> */}
            </div>
        );
    };


    useEffect(() => {
        let params = {
            category,
        };
        isStarted && setSearchParams(params);
    }, [category, isStarted]);


    const initialDuration = 600000;


    return (
        <div className='flex flex-col justify-center w-1/4'>
            <div className='h-full flex flex-col justify-center shadow-md w-full bg-gray-800'>
                <div className='flex flex-col gap-2 justify-center border-solid border-green-700'>
                    {!isStarted ? <button onClick={() => setIsStarted(true)} className='m-auto  outline rounded py-2 px-8 text-slate-400'> Start Interview</button> : <button onClick={() => setIsStarted(false)} className='m-auto  outline rounded py-2 px-8 text-slate-400 '> Stop Interview</button>}


                    <div>
                        <select
                            disabled={isStarted}
                            value={category}
                            onChange={handleChange}
                            className="p-2 px-4 border border-gray-400 text-slate-400 rounded bg-inherit "
                        >
                            <option className='bg-gray-800' value="">Select a category</option>
                            <option className='bg-gray-800' value="JAVA">JAVA</option>
                            <option className='bg-gray-800' value="MERN">MERN</option>
                            <option className='bg-gray-800' value="NODE">NODE</option>
                        </select>
                    </div>
                </div>
                <div className='flex  w-full top-10  text-slate-400'>
                    <Timer initialDuration={initialDuration} />

                </div>

            </div>

            <div>
                <WebcamComponent />
            </div>
        </div>
    )
}

export default Sidebar;