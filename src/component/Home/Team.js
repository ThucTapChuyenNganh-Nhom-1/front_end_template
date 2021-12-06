import React from 'react'
import facebook from '../../images/facebook.svg'
import github from '../../images/githuub_blue.svg'
import instagram from '../../images/instagram.svg'
// import twitter from '../../images/twitter.svg'

const team = [
    {
        id: 1,
        ten: "Mang Bảo",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
        chucvu: "Thành viên",
        contact:
            [
                { name: facebook, link: "facebook.com" },
                { name: instagram, link: "instagram.com" },
                { name: github, link: "github.com" }
            ],
        mota: "Tận tụy trong công việc, có tinh thần trách nhiệm cao,"
    },
    {
        id: 2,
        ten: "Lê Minh Long",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
        chucvu: "Thành viên",
        contact:
            [
                { name: facebook, link: "facebook.com" },
                { name: instagram, link: "instagram.com" },
                { name: github, link: "github.com" }
            ],
        mota: "Tận tụy trong công việc, có tinh thần trách nhiệm cao,"
    },
    {
        id: 3,
        ten: "Hà Minh Tài",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
        chucvu: "Thành viên",
        contact:
            [
                { name: facebook, link: "facebook.com" },
                { name: instagram, link: "instagram.com" },
                { name: github, link: "github.com" }
            ],
        mota: "Tận tụy trong công việc, có tinh thần trách nhiệm cao,"
    },
    {
        id: 4,
        ten: "Trần Nguyễn Bảo Trung",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
        chucvu: "Thành viên",
        contact:
            [
                { name: facebook, link: "facebook.com" },
                { name: instagram, link: "instagram.com" },
                { name: github, link: "github.com" }
            ],
        mota: "Tận tụy trong công việc, có tinh thần trách nhiệm cao,"
    },
    {
        id: 6,
        ten: "Trần Công Tâm",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
        chucvu: "Thành viên",
        contact:
            [
                { name: facebook, link: "facebook.com" },
                { name: instagram, link: "instagram.com" },
                { name: github, link: "github.com" }
            ],
        mota: "Tận tụy trong công việc, có tinh thần trách nhiệm cao,"
    },
]

const Team = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 fadeInUp">

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {
                    team.map((item) => (

                        <div key={item.id}>
                            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">

                                <img
                                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                                    src={item.img}
                                    alt="Person"
                                />


                                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                    <a href="/" >
                                        <p className="mb-1 text-lg font-bold text-gray-100">
                                            {item.ten}
                                        </p>
                                    </a>

                                    <p className="mb-4 text-xs text-gray-100">{item.chucvu}</p>
                                    <p className="mb-4 text-xs tracking-wide text-gray-400">
                                        {item.mota}
                                    </p>
                                    <div className="flex items-center justify-center space-x-3">
                                        {
                                            item.contact.map((contact, index) => (

                                                <a
                                                    key={index}
                                                    href={"http://" + contact.link}
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                                >
                                                    <img src={contact.name} alt="" className="h-8" />

                                                </a>
                                            ))

                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))
                }

            </div>
        </div>

    )
}

export default Team
