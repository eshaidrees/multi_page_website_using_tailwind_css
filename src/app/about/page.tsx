import React from "react";

export default function About (){
  return (
    <div className=" flex flex-col md:flex-row justify-center items-center p-6 md:p-16 lg:p-20 gap-8 lg:gap-12 max-w-8xl mx-auto">
          <title className="title">About</title>
          <div className='w-full min-h-[90vh] md:w-1/2 text-center md:text-left mt-6 md:mt-0 lg:p-6'>
           <h1 className="font-bold mb-4 pt-6 text-black text-3xl">About Me</h1>
           <p className="text-left text-black">I&apos;m an intermediate student.I recently completed a few steps in learning HTML, CSS, TypeScript and Javascript I&apos;m currently expanding my knowledge in Next.js and starting my journey into Artificial Intelligence.</p>
       </div>
        </div>

  );
};


