import React from "react";

export default function Contact(){
  return (
    <div className="contact-content bg-white p-8 min-h-[90vh] text-center font-sans">
        <title className="title">Contact</title>
        <h1 className="title text-3xl text-black font-bold p-5 ">Contact Me</h1>
        <p className=" text-black mb-4 ">Feel free to reach out using the contact details below</p>
      
      <section className="space-y-4 text-center">
        <p>
          <b>Email:</b> <a href="mailto:eshaidrees190@gmail.com" className="text-[#3498db] hover:text-[#2980b9]">eshaidrees190@gmail.com </a>
        </p>
        <p>
          <b>LinkedIn:</b>
          <a href="https://www.linkedin.com/in/esha-idrees-1379692b7" target="_blank"  className="text-[#3498db] hover:text-[#2980b9]">
            LinkedIn Profile
          </a>
        </p>
      </section>
    </div>
  );
};
