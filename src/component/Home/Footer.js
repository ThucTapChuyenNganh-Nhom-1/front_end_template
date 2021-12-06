import React from 'react'
import { SmothScroll } from './SmothScroll';
// import bg_ft from '../../images/footer-bg.png'
import logo from '../../images/logo_nhomwhile.png'
import insta from '../../images/instagram.svg'
import fb from '../../images/facebook.svg'
import github from '../../images/github.svg'
import ytb from '../../images/youtube.svg'

const Footer = () => {

    const bind = SmothScroll('#contact')

    return (
        <footer {...bind} className="fadeIn_1">
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                <div className="w-2/4 text-center mx-auto text-sm hidden xl:block md:block lg:block">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="xl:text-2xl md:text-2xl lg:text-4xl font-bold lg:mb-10">
                            <h4>Tham gia danh sách gửi thư của chúng tôi để nhận tin tức &amp; xu hướng mới nhất</h4>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-3">
                        <form id="search" action="#" method="GET">
                            <div className="flex justify-center">
                                <div className="">
                                    <fieldset className="w-40 md:w-80 lg:w-80 text-sm lg:text-xl">
                                        <input type="email" name="email" className="email rounded-3xl" placeholder="Địa chỉ Email..." autoComplete="on" required />
                                    </fieldset>
                                </div>
                                <div className="">
                                    <fieldset className="w-20 xl:w-44 md:w-44 lg:w-44 ml-3 text-sm lg:text-xl">
                                        <button type="submit" className="main-button">Gửi Ngay <i className="fa fa-angle-right"></i></button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="grid gap-10 row-gap-3 mb-8 sm:grid-cols-2 lg:grid-cols-4 contact">
                    <div className="sm:col-span-2 hidden lg:block">
                        <a
                            href="/"
                            aria-label="Go home"
                            title="Company"
                            className="inline-flex items-center"
                        >
                            <img alt="" src={logo} className="h-16" />
                        </a>
                        <div className="mt-6 lg:max-w-sm">
                            <p className="text-sm text-white">
                                Nhóm thực tập sinh 5 người, đến từ Đại học Nha Trang và đang thực hiện đề tài tại 9thWonder.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-2  text-sm">
                        <p className="text-base font-bold tracking-wide text-white">
                            Liên hệ
                        </p>
                        <div className="contact_item mx-auto">
                            {/* <p className="mr-1 text-white"></p> */}
                            <a
                                href="tel:850-123-5021"
                                aria-label="Our phone"
                                title="Our phone"
                                className="transition-colors duration-300 text-deep-purple-accent-400 text-white hover:text-deep-purple-800"
                            >
                                Điện thoại: 850-123-5021
                            </a>
                        </div>
                        <div className="contact_item">
                            {/* <p className="mr-1 text-white"></p> */}
                            <a
                                href="mailto:info@lorem.mail"
                                aria-label="Our email"
                                title="Our email"
                                className="transition-colors duration-300 text-deep-purple-accent-400 text-white hover:text-deep-purple-800"
                            >
                                Email: info_nhom1@gmail.com
                            </a>
                        </div>
                        <div className="contact_item">
                            {/* <p className="mr-1 text-white"></p> */}
                            <a
                                href="https://www.google.com/maps"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Our address"
                                title="Our address"
                                className="transition-colors text-white duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                Địa chỉ: Số 2 Nguyễn Đình Chiểu, Vĩnh Thọ, Thành phố Nha Trang, Khánh Hòa
                            </a>
                        </div>
                    </div>
                    <div>
                        <span className="text-base font-bold tracking-wide text-white">
                            Mạng xã hội
                        </span>
                        <div className="flex items-center mt-1 space-x-3 justify-center md:justify-start">
                            <a
                                href="/"
                                className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                <img alt="" src={insta} className="h-8" />

                            </a>
                            <a
                                href="/"
                                className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                <img alt="" src={fb} className="h-8" />
                            </a>
                            <a
                                href="/"
                                className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                <img alt="" src={ytb} className="h-10" />
                            </a>
                            <a
                                href="/"
                                className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                <img alt="" src={github} className="h-10" />
                            </a>
                        </div>
                        <p className="mt-4 text-base text-white">
                            Theo dõi bài viết và các dự án trên các trang mạng xã hội cùng chúng tôi.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row p-0">
                    <p className="text-sm text-white">
                        © Copyright 2021 by Nhóm 1. All rights reserved.
                    </p>
                    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                        <li>
                            <a
                                href="/"
                                className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                F.A.Q
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                Terms &amp; Conditions
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer
