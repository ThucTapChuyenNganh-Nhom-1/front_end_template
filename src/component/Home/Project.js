import React from 'react'
import dash from '../../images/heading-line-dec.png'
import avt_bao from '../../images/avt_bao.jpg'
import avt_au from '../../images/client-image.jpg'
import { useState } from 'react'

const projects = [
    {
        pjId: 1,
        imgPJ: "https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500",
        namePJ: "Quản lý bán sách Phương Nam",
        startDay: "1/1/2021",
        endDay: "31/12/2021",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque",
        author: [
            { authorId: "NV01", imgAut: avt_bao },
            { authorId: "NV02", imgAut: avt_au },
        ]
    },
    {
        pjId: 2,
        imgPJ: "https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500",
        namePJ: "Quản lý bán sách Phương Nam",
        startDay: "1/1/2021",
        endDay: "31/12/2021",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque",
        author: [
            { authorId: "NV01", imgAut: avt_bao }
        ]
    },
    {
        pjId: 3,
        imgPJ: "https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500",
        namePJ: "Quản lý bán sách Phương Nam",
        startDay: "1/1/2021",
        endDay: "31/12/2021",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque",
        author: [
            { authorId: "NV01", imgAut: avt_bao }
        ]
    },
    {
        pjId: 4,
        imgPJ: "https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500",
        namePJ: "Quản lý bán sách Phương Nam",
        startDay: "1/1/2021",
        endDay: "31/12/2021",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque",
        author: [
            { authorId: "NV01", imgAut: avt_bao }
        ]
    },
]

const Project = () => {

    const [show, setShow] = useState(false)

    // return (
    //   <div style={{padding: 20}}>
    //     <button onClick={() => setShow(!show)}>
    //       Toggle
    //     </button>
    //     {show && <Content />}
    //   </div>
    // )

    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 fadeInDown">
                <h2 className="mb-4 font-sans text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    Các Dự Án Đã Thực Hiện
                </h2>
                <img src={dash} alt="" className="w-14 text-center mx-auto mb-6" />
                <hr className="w-7/12 mx-auto my-8 border-gray-300" />
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">

                    {
                        projects.map((item) => (
                            <a href={ item.pjId }>
                                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-xl">
                                    <img
                                        src={item.imgPJ}
                                        className="object-cover w-full h-64"
                                        alt=""
                                    />
                                    <div className="p-5 border border-t-0">
                                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                                            <span className="text-gray-600">{item.startDay}</span>
                                            <span className="text-gray-600"> — {item.endDay}</span>
                                        </p>
                                        <a
                                            href="/"
                                            aria-label="Category"
                                            title="Visit the East"
                                            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                                        >
                                            {item.namePJ}
                                        </a>
                                        <p className="mb-2 text-gray-700 h-32">
                                            {item.desc}
                                        </p>
                                        <div className="flex">
                                            {
                                                item.author.map((aut) => (
                                                    <a href={"/" + aut.authorId} aria-label="Author" title="Author" className="mr-5">
                                                        <img
                                                            src={aut.imgAut}
                                                            alt="avatar"
                                                            className="object-cover w-10 h-10 rounded-full shadow-sm"
                                                        />
                                                    </a>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Project