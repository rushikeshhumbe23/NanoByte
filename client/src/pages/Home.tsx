import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer"
function Home() {
    const navigate = useNavigate();
    return (
        <div className="px-4">
            <div className="flex flex-col-reverse md:flex-row  md:space-x-20">
                <div className="flex-1 flex flex-col justify-center md:pl-8">

                    <div className="text-4xl font-bold"> Practice Smarter, Interview Better</div>
                    <div className="text-xl"> Interview Excellence, Empowered by AI Technology</div>
                    <button
                        className="mt-4 bg-green-800 hover:bg-green-600  text-white py-3 px-12 font-medium border"
                        onClick={() => navigate("/interview")}
                    >
                        Start Interview
                    </button>
                </div>
                <div className="md:w-1/2  rounded-md overflow-hidden">
                    <img

                        className="w-full  rounded-md overflow-hidden"
                        src="https://blog.talview.com/hs-fs/hubfs/AI_V.png?width=842&name=AI_V.png"
                        alt='heroimage'
                    />
                </div>
            </div>




            <div className="mt-10">
                <div className="text-3xl text-left font-bold">Instructions</div>
                <ul className="mt-4 list-decimal list-inside text-left font-bold">
                    <li><span className="font-bold">Duration: </span> Anticipate that the interview will last approximately 10 minutes, so make sure to find a serene and well-lit environment to conduct the interview without any interruptions.</li>
                    <li> <span className="font-bold">Categories: </span> There are three categories for selecting tech stacks: MERN, Java, and Node.</li>
                    <li>You can only select one category at a time.</li>
                    <li> <span className="font-bold">Question Format: </span> You will be presented with 10 questions during the interview.</li>
                    <li> <span className="font-bold">Listen Carefully: </span> Pay close attention to the question prompts and make sure you understand what is being asked before providing your response. If you need clarification, don't hesitate to ask for it.</li>
                    <li> <span className="font-bold">Time Management: </span>  It is important to manage your time effectively. You will have approximately 1 minute to answer each question.</li>
                    <li><span className="font-bold">Technical Requirements: </span> Ensure that you have a stable internet connection and a suitable environment for the interview.</li>
                    <li>Finally, remember to relax and be yourself during the interview. Your personality and enthusiasm can also make a positive impression on the interviewer. Good luck!</li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
