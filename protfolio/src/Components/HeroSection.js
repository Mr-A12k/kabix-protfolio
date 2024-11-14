// import React from 'react';
// import Image from '../Assests/file (3).png';

// const HeroSection = () => {
//     return (

//         <section className="dark:bg-gray-100 dark:text-gray-800">

//             <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">

//                 {/* Text Section */}
//                 <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
//                     <h1 className="text-5xl font-bold leading-none sm:text-6xl">
//                         Hello,<br />
//                         I am <span className="dark:text-violet-600 text-[rem] font-bold animate-pulse transition-all duration-700 ease-in-out hover:animate-bounce">
//                             Arun Kapil
//                         </span><br />
//                         <span className="dark:text-violet-600 text-[4.2rem] font-bold animate-pulse transition-all duration-700 ease-in-out">
//                             <span className="typing-text">Designer</span>
//                             <span className="typing-text">Developer</span>
//                         </span>


//                     </h1>
//                     <p className="mt-8 mb-10 text-lg sm:mb-15">
//                         I specialize in UI/UX design and creating smooth digital experiences.
//                         With skills in tools like Figma, ReactJS, and Node.js, I focus on detail and usability to bring ideas to life.
//                         My projects show my commitment to quality, user-centered design, and meaningful results.
//                         I'm always learning and adapting, pushing boundaries to deliver solutions that make a real difference.
//                     </p>

//                     {/* Buttons */}
//                     <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
//                         <a
//                             rel="noopener noreferrer"
//                             href="#"
//                             className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
//                         >
//                             Suspendisse
//                         </a>
//                         <a
//                             rel="noopener noreferrer"
//                             href="#"
//                             className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
//                         >
//                             Malesuada
//                         </a>
//                     </div>
//                 </div>

//                 {/* Image Section */}
//                 <div className="flex items-center justify-center p-6 mt-8 lg:mt-0">
//                     <img
//                         src={Image}
//                         alt="Profile Image"
//                         className="object-contain w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-[600px] lg:h-[600px] xl:w-[600px] xl:h-[600px]"
//                     />
//                 </div>


//             </div>
//         </section>
//     );
// };

// export default HeroSection;


import React, { useState, useEffect } from 'react';
import Image from '../Assests/file (3).png';

const HeroSection = () => {
    const [word, setWord] = useState("Designer");
    const words = ["Designer", "Developer"];
    const [index, setIndex] = useState(0);
    const [typingEffect, setTypingEffect] = useState(true); // Track typing effect completion

    // Change the word after typing animation completes
    useEffect(() => {
        const typingInterval = setInterval(() => {
            setTypingEffect(false); // Stop typing animation when word changes
        }, 5000); // Set typing effect duration based on animation timing (3 seconds)

        const wordChangeInterval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
            setTypingEffect(true); // Restart typing animation when the word changes
        }, 5500); // Changes the word every 3.5 seconds (after typing animation completes)

        return () => {
            clearInterval(typingInterval);
            clearInterval(wordChangeInterval);
        };
    }, [words.length]);

    // Update the current word based on index
    useEffect(() => {
        setWord(words[index]);
    }, [index]);

    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">

                {/* Text Section */}
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                        Hello,<br />
                        I am <span className="dark:text-violet-600 text-[4rem] font-bold ">
                            Arun Kapil
                        </span><br />
                        <span className="dark:text-violet-600 text-[4rem] font-bold">
                            <span className={`typing-text ${typingEffect ? 'typing' : ''}`}>{word}</span>
                        </span>
                    </h1>
                    <p className="mt-8 mb-10 text-lg sm:mb-15">
                        I specialize in UI/UX design and creating smooth digital experiences.
                        With skills in tools like Figma, ReactJS, and Node.js.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="px-14 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
                        >
                            Contact Me     
                        </a>
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
                        >
                           Download Resume
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0">
                    <img
                        src={Image}
                        alt="Profile Image"
                        className="object-contain w-200 h-200 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-[600px] lg:h-[600px] xl:w-[600px] xl:h-[600px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
