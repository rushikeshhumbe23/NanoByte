import React, { useState, useEffect, useRef } from 'react';
import { BiSolidMicrophoneOff } from 'react-icons/bi';
import { FaMicrophone } from 'react-icons/fa';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { BsTelegram } from "react-icons/bs";
import axios, { AxiosResponse } from 'axios';
import { useLocation, useSearchParams } from "react-router-dom";


interface QuestionData {
    question: string;
}

const Main = () => {
    const location = useLocation();
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    const [microPhone, setMicroPhone] = useState<boolean>(false);
    const [isTranscript, setIsTranscript] = useState<string>('');
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [searchParams] = useSearchParams();
    const [nextQue, setNextQuestion] = useState<boolean>(false)
    const [question, setQuestion] = useState<string>("");
    const [questionNo, setQueNO] = useState<number>(1)
    const [isfeedback, setFeedBack] = useState<boolean>(false);
    const [feedBackContent, setFeedContent] = useState<string>("");

    let obj = {
        params: {
            prompt: searchParams.get("category"),
        },
    };

    const feedbackButtton = () => {
        getFeedback();
        setFeedBack(pre => !pre)
    }

    const getNewQuestion = async () => {
        console.log(obj);

        await axios.get(`https://intr-ai.onrender.com/bot/ask`, obj)
            .then((res) => setQuestion(res.data))
    }

    const sendAnswer = async () => {

        await axios.post(`https://intr-ai.onrender.com/bot/reply?prompt=${isTranscript}`)
            .then((res) => console.log(res))
    }

    const getResult = async () => {
        await axios.get(`https://intr-ai.onrender.com/bot/result`)
            .then((res) => console.log(res))
    }

    const getFeedback = async () => {
        await axios.get(`https://intr-ai.onrender.com/bot/feedback`)
            .then((res) => setFeedContent(res.data))
    }

    useEffect(() => {
        getNewQuestion()
    }, [location.search, nextQue])
    const handleMicroPhoneStop = () => {
        SpeechRecognition.stopListening();
        setMicroPhone(false)
    }

    const handleMicroPhoneStart = () => {
        SpeechRecognition.startListening();
        setMicroPhone(true);
    }

    useEffect(() => {
        setIsTranscript(transcript);
    }, [transcript]);


    const nextQuestion = () => {
        sendAnswer();
        setNextQuestion(pre => !pre)
        setQueNO((pre) => pre + 1);
    }
    return (
        <div className='bg-gray-300 w-3/4 border-solid border-red-500'>
            <div className='flex'>
                {!isfeedback && <div className='w-3/4 flex justify-start items-center h-20  overflow-hidden m-auto rounded-2xl text-left text-2xl text-black top-4'>{`${questionNo}) ${question}`}</div>}
                {isfeedback && <div className='w-3/4 flex justify-start items-center h-50  overflow-hidden m-auto rounded-2xl text-left text-2xl text-black top-4'>{feedBackContent}</div>}
                <div onClick={feedbackButtton} className=' flex justify-start items-center h-20 text-white'><button className='bg-red-600 rounded-md p-2'>SUBMIT & FEEDBACK</button></div>
            </div>
            <div className='flex fixed bottom-0 w-3/4  text-slate-400'>
                <div className='w-full m-10'>
                    <textarea
                        ref={textAreaRef}
                        value={isTranscript}
                        onChange={(e) => setIsTranscript(e.target.value)}
                        className="w-full m-auto h-13 bg-gray-700 rounded-3xl outline focus:border-blue-400 px-4 py-2 mb-4"
                        placeholder="Enter your Answer"
                    />
                </div>
                <div className='flex w-1/9 gap-4 items-center justify-start px-2'>

                    {microPhone ?
                        <FaMicrophone className='text-green-700 text-2xl' onClick={handleMicroPhoneStop} />
                        :
                        <BiSolidMicrophoneOff className='text-slate-400 text-2xl' onClick={handleMicroPhoneStart} />
                    }

                    <button onClick={nextQuestion}><BsTelegram className='text-green-700 text-3xl' /></button>
                </div>
            </div>
        </div>
    )
}

export default Main;