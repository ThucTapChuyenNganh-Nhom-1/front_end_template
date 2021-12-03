import React from 'react'
// import { useRef, useEffect } from 'react'
import slide_dec from '../../images/slider-dec.png'
import insta from '../../images/instagram.svg'
import fb from '../../images/facebook.svg'
import github from '../../images/github.svg'
import ytb from '../../images/youtube.svg'
import { SmothScroll } from './SmothScroll'


const Header = () => {

    // const [slideInLeft, setSlideInLeft] = useState("slideInLeft")

    // useEffect(() => {

    //     const handleScroll = () => {
    //         if(window.scrollY <= 200){
    //             setSlideInLeft("slideInLeft")
    //         } else if(window.scrollY > 200) {
    //             setSlideInLeft("")
    //         }
    //     }
    //     window.addEventListener("scroll", handleScroll)

    //     // Clean up 
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll)
    //     }
    // }, [])

    const bind_home = SmothScroll('#home')
    
    return (
        <div>
            <div {...bind_home} className="bg_content mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 ">
                <div className="grid gap-10 lg:grid-cols-2 show-up ">
                    <div className={"sm:pr-10 slideInLeft "} style={{ alignSelf: "center" }}>
                        <a
                            href="/"
                            aria-label="Go Home"
                            title="Logo"
                            className="inline-block mb-5"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                <svg
                                    className="w-10 h-10 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </a>
                        <h2 className="mb-4 md:text-5xl font-extrabold leading-none">
                            Theo dõi chúng tôi
                            <br className="hidden md:block" />
                            {' '}trên mạng{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                xã hội
                            </span>
                        </h2>
                        <p className="tieude mb-6 md:text-xl font-light text-gray-900">
                            Trang này được tạo ra bằng cách sử dụng HTML5, CSS, JS,...
                            Hãy liên hệ ngay với chúng tôi trên các mạng xã hội ngay bây
                            giờ để được đặt hàng tạo trang web của riêng bạn.
                        </p>
                        <hr className="mb-5 border-gray-300" />
                        <div className="flex items-center ls_icon space-x-6">
                            <a
                                href="/"
                                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                <img alt="" src={insta} className="h-11" />

                            </a>
                            <a
                                href="/"
                                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                <img alt="" src={fb} className="h-10" />
                            </a>
                            <a
                                href="/"
                                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                <img alt="" src={ytb} className="h-12" />
                            </a>
                            <a
                                href="/"
                                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                <img alt="" src={github} className="h-12" />
                            </a>
                        </div>
                    </div>
                    <div className="slideInRight">
                        <img
                            className=" w-full  "
                            src={slide_dec}
                            alt=""
                        />
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default Header