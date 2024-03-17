"use client"
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
// import PreviousMap from "postcss/lib/previous-map";

export default function Email() {
    const form = useRef();
    const [success, setSuccess] = useState(false);
    // for send name

    const [getname, setGetname] = useState("");

  const handleChange = event => {
    setGetname(event.target.value);

    // console.log("value is:", event.target.value);
  };

    const sendEmail = (e) => {
        e.preventDefault();
        

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
            publicKey: 'YOUR_PUBLIC_KEY',
          })
            .then(
                () => {
                    console.log("SUCCESS!");
                    // e.target.form();
                    // alert("your email recived successfully");
                    setSuccess(true);
                },
                (error) => {
                    console.log("FAILED...", error.text);
                },
            )
    };
const handleSubmit=()=>{
setSuccess(false);
}

    return (
        <section id="Contact" className="max-w-contentContainer mx-auto pt-10 relative ">
            <div className="">
                <h2 className="text-2xl font-semibold text-center lgl:text-start  text-textGreen">Feel Free to connect with us

                    <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6"></span>
                </h2>
                <main className="w-full lgl:h-[70vh] text-white flex flex-col lgl:flex-row ">
                    <aside className="lgl:w-1/2 w-full h-full flex flex-col justify-center gap-10 pl-10 mt-4">
                        <h1 className=" font-bold text-lg">Get in touch</h1>
                        <p className="-mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio quam sit placeat pariatur animi rerum labore doloremque odio, esse quasi suscipit obcaecati at facilis sed exercitationem architecto vero inventore commodi.</p>

                        <div className=" grid gap-3">

                            <div className="flex lgl:gap-3 gap-3 items-center"> <FaPhone className="" /> <span >+91 971-107-8616 <br /> +91 971-107-8730</span>
                            </div>
                            <div className="flex gap-3 items-center"> <FaLocationDot  className="" /> <span className=""><h3 className=" font-semibold text-xl">Elliotte Technologies LLP</h3> 2513/9, Naya Bazar, Chandni <br />Chowk, Delhi-110006</span>
                            </div>

                        </div>
                        <div className=" px-16 lgl:px-48">
                            {/* <footer></footer> */}
                        </div>
                    </aside>

                    <aside className=" lgl:w-1/2 lgl:h-full grid  items-center justify-center  ">
                        <form ref={form} onSubmit={sendEmail} className="  flex flex-col max-w-[400px] gap-5 rounded-2xl shadow-inner shadow-textGreen p-10 font-semibold ">
                            <h2 className="text-end">Please Fill</h2>
                            <div className="flex flex-col justify-start gap-1 ">
                                <label htmlFor="name" >Full Name</label>
                                <input
                                    className="text-black p-1 rounded-xl  placeholder:text-[14px] "
                                    type="text"
                                    name="user_name"
                                    id="name"
                                    placeholder="Your Name"
                                    value={getname}
                                    onChange={handleChange}
                                    
                                    required
                                />
                            </div>


                            <div className="flex flex-col justify-start gap-1">
                                <label htmlFor="Email">Email</label>
                                <input
                                    className="text-black p-1 rounded-xl  placeholder:text-[14px]"

                                    type="email"
                                    name="user_email"
                                    placeholder="Email"

                                    id="Email" required />

                            </div>
                            <div className="flex flex-col justify-start gap-1">

                                <label htmlFor="number">Mobile No</label>
                                <input
                                    className="text-black p-1 rounded-xl  placeholder:text-[14px]"

                                    type="number"
                                    placeholder="Mobile No"
                                    name="user_no"
                                    id="number" required />

                            </div>
                            <div className="flex flex-col justify-start gap-1">

                                <label htmlFor="message">Message</label>
                                <textarea
                                    className=" resize-none text-black p-1 rounded-xl text-nowrap text-[10px]  placeholder:text-[10px]"

                                    name="message"
                                    placeholder="your Message"
                                    id="message"
                                    rows={4}
                                    cols={8}
                                    required
                                />
                            </div>
                            <button className="px-4 py-3 rounded-md text-textGreen text-[13px] border border-textGreen  hover:bg-hoverColor duration-300" type="submit" value="Send" > Send</button>
                        </form>
                    </aside>
                </main>
            </div>

            {/* this button for check sucess message pop-up */}
            {/* <button onClick={() => setSuccess(true)} className="p-4 bg-textDark">check </button> */}

            {/* mail success message */}

            {
                success &&
                <div className=" w-full h-full  bg-gradient-to-r from-blue-700 to-purple-600 z-40 flex justify-center items-center absolute top-0 left-0">
                    <div className="w-[300px] h-[300px]  text-black"> 
                        <div className="flex justify-center z-50 text-[80px] text-green-400 animate-bounce"><FaCheckCircle className=" " /></div>
                        <div className="w-full h-full bg-slate-300 flex flex-col p-3 justify-evenly pt-14 -mt-16 rounded-lg ">
                            <div className="flex justify-center"><h2 className="text-2xl font-semibold">Thank you!</h2></div>
                            <div className="flex justify-center font-extrabold  text-textGreen"><span>{getname}</span></div>
        
                            <div className="flex justify-center text-[13px] font-medium px-3"><h3 className="text-center">Your response has been successfully recived i"ll connact you as soon as possible</h3></div>
                            <div className="flex justify-center mx-4">
                                <button onClick={handleSubmit} className="bg-green-400 p-3 w-full"> OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}
