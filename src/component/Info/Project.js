import React from 'react'
// import dash from '../../images/heading-line-dec.png'
import avt_bao from '../../images/avt_bao.jpg'
import avt_au from '../../images/client-image.jpg'
import { SmothScroll } from '../Home/SmothScroll'
// import { useState } from 'react'

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
]

const Project = () => {
  const bind = SmothScroll('#pro')

  return (
      <div {...bind} className="frame_all fadeInDown">
        <div className="title">
          <h2 className="menu_name">
            Các Dự Án Đã Thực Hiện
          </h2>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {
            projects.map((item) => (

              <div key={item.pjId} className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-xl">
                <a href="/" >
                  <img
                    src={item.imgPJ}
                    className="object-cover w-full h-64"
                    alt=""
                  />
                </a>

                <div className="p-5 border border-t-0">
                  <p className="mb-3 text-base font-semibold tracking-wide uppercase">
                    <span className="text-gray-600">{item.startDay}</span>
                    <span className="text-gray-600"> — {item.endDay}</span>
                  </p>
                  <a
                    href="/"
                    aria-label="Category"
                    title="Visit the East"
                    className="inline-block mb-3 text-xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                  >
                    {item.namePJ}
                  </a>
                  <p className="mb-2 text-gray-700 h-32">
                    {item.desc}
                  </p>
                  <div className="flex">
                    {
                      item.author.map((aut) => (
                        <a key={aut.authorId} href={"/" + aut.authorId} aria-label="Author" title="Author" className="mr-5">
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

            ))
          }
        </div>
      </div>
  )
}

export default Project
