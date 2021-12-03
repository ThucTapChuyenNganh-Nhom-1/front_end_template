import React from 'react'
import dash from '../../images/heading-line-dec.png'

const About = () => {

    return (
        <div  className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="max-w-screen-sm sm:text-center sm:mx-auto fadeInDown visible relative z-2">

                <h2 className="mb-4 font-sans text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    Về Các Thành Viên Trong Nhóm
                </h2>
                <img src={dash} alt="" className="w-14 text-center mx-auto mb-2"/>
                <p className="font-normal text-lg text-center">
                    Nhóm 1 thực tập sinh đến từ Đại học Nha Trang, và đang thực hiện đề tài thực tập chuyên ngành tại công ty 9thWonder. 
                    Đề tài sử dụng HTML, CSS và framework TailWind, PHP và framework Laravel, JavaScript và framework. 
                    Thiết kế trao đổi dữ liệu theo RESTful API, sử dụng công cụ quản lý thư viện Composer, npm.
                </p>
                <hr className="w-full my-8 border-gray-300" />
            </div>
        </div>
    )
}

export default About
