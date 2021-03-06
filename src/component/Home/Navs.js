import React from 'react'
import { useState, useEffect } from 'react';

import logo from '../../images/logo_nhom1.png'

const tabs = [
    {
        href: "#home",
        title: "home",
        name: "TRANG CHỦ",
    },
    {
        href: "#about",
        title: "about",
        name: "GIỚI THIỆU",
    },
    {
        href: "#project",
        title: "project",
        name: "DỰ ÁN",
    },
    {
        href: "#contact",
        title: "contact",
        name: "LIÊN HỆ",
    },
]

const Navbar = () => {
    // const [type, setType] = useState("TRANG CHỦ")
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [fadeInDown, setFadeInDown] = useState("fadeInDown")
    const [Bg_Header, setBg_Header] = useState("")
    // const [addWidth, setAddWidth] = useState(window.innerWidth)


    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY <= 120 || window.scrollY === 0 ) {
                setFadeInDown("fadeInDown")
                setBg_Header("")
            } else if (window.scrollY > 120) {
                setFadeInDown("")
                setBg_Header("background-header")
            }
        }

        window.addEventListener("scroll", handleScroll)


        // Clean up 
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    

    // console.log(showAnimation)

    
    return (

        <div style={{
            borderBottom: "1px solid rgba(42, 42, 42, 0.2)",
            visibility: "visible",
        }}
            className={"header-area header-sticky "  + Bg_Header + " " + fadeInDown }
        >
            <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="main-nav flex items-center justify-between mx-auto main-nav_md" >
                    <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center logo p-2"
                    >
                        <img
                            src={logo}
                            style={{}}
                            className="img"
                            alt=""
                        />

                    </a>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        {
                            tabs.map((item, index) => (
                                <li key={index} className="scroll-to-section">
                                    <a
                                        href={item.href}
                                        aria-label="Our product"
                                        title={item.title}
                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-3 left-0 w-full " style={{ zIndex: 1 }}>
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div></div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            {
                                                tabs.map((item, index) => (

                                                    <li key={index}>
                                                        <a
                                                            href={item.href}
                                                            aria-label="Our product"
                                                            title={item.title}
                                                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                        >
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                    
                                                ))
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar
