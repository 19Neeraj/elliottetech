'use client'
import Link from "next/link";
import { delay, motion } from "framer-motion"
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
// import Footer from "./Footer";
import { TiThSmall } from "react-icons/ti";
import { IoReorderThreeOutline } from "react-icons/io5";
import Image from 'next/image'


export default function Navbar() {
    const [navshow, setNavshow] = useState(false);
    function onclickhandle() {
        setNavshow(!navshow);

    }
    function onclickhandlenav() {
        setNavshow(false);


    }
    return (
        <>
            <div className="w-full shadow-navbarShadow h-20 1g:h-[12vh] fixed top-0 z-50 bg-gradient-to-r from-blue-500 to-purple-700 px-4">
                <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-evenly">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img className=" h-10 rounded-lg fill-transparent" src="/images/logo.png" alt="logo" />
                    </motion.div>
                    <div className=" hidden mdl:inline-flex justify-center gap-7">
                        <ul className="flex text-[13px] gap-7">
                            <Link
                                href="#home"
                                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                                <motion.li
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.1 }}
                                >Home</motion.li>
                            </Link>
                            <Link
                                href="#ourservices"
                                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                                <motion.li
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Services
                                </motion.li>
                            </Link>


                            <Link
                                href="#About"
                                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                                <motion.li
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    About
                                </motion.li>
                            </Link>
                            <Link
                                href="#message"
                                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                                <motion.li
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    Reviews
                                </motion.li>
                            </Link>
                            <Link
                                href="#Why_us"
                                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                                <motion.li
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    Why us
                                </motion.li>
                            </Link>
                            <Link
                                href="#Contact"
                                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link  ">
                                <motion.li
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    contact
                                </motion.li>
                            </Link>

                        </ul>

                    </div>
                    {/*  Small Icon section  */}
                    <button className="mdl:hidden" onClick={onclickhandle}>
                        {navshow ?
                            <AiOutlineClose className="text-2xl" />
                            :
                            <div className=" text-blue-900 text-4xl">
                                <IoReorderThreeOutline />
                            </div>
                        }
                    </button>

                </div>
            </div>

            {/* for mobile response */}
            {navshow &&
                <div className=" mdl:hidden fixed w-2/3 right-0 h-[100vh]   bg-gradient-to-r from-blue-700 to-purple-600 z-10 pt-12">
                    <div className="flex flex-col  items-center gap-6">
                        <ul className="flex flex-col text-[13px] gap-6">
                            <Link onClick={onclickhandlenav}
                                href="#home"
                                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                                <motion.li
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.1 }}
                                >Home</motion.li>
                            </Link>
                            <Link onClick={onclickhandlenav}
                                href="#ourservices"
                                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                                <motion.li
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.1 }}
                                >
                                    Services
                                </motion.li>
                            </Link>


                            <Link onClick={onclickhandlenav}
                                href="#About"
                                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                                <motion.li
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.1 }}
                                >
                                    About
                                </motion.li>
                            </Link>
                            <Link onClick={onclickhandlenav}
                                href="#message"
                                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                                <motion.li
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.1 }}
                                >
                                    Reviews
                                </motion.li>
                            </Link>
                            <Link onClick={onclickhandlenav}
                                href="#Why_us"
                                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                                <motion.li
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.1 }}
                                >
                                    Why us
                                </motion.li>
                            </Link>
                            <Link onClick={onclickhandlenav}
                                href="#Contact"
                                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link ">
                                <motion.li
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.1 }}
                                >
                                    contact
                                </motion.li>
                            </Link>
                        </ul>


                    </div>

                </div>
            }

        </>





    )
}
