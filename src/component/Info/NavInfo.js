import React from 'react'

const NavInfo = () => {
  return (
    <div className="flex md:flex-row-reverse flex-wrap">
      <div className="w-full md:w-44 bg-gray-900 px-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 md:border-gray-600">
        <div className="md:relative mx-auto lg:float-right lg:px-6">
          <ul className="list-reset flex flex-row md:flex-col text-center md:text-left">
            <li className="mr-3 flex-1">
              <a href="#info" className="inline-block md:inline-flex py-1 md:py-3 text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="pb-1 md:pb-0 text-lg md:text-base text-gray-600 md:text-gray-400">Thông tin</span>
              </a>
            </li>
            <li className="mr-3 flex-1">
              <a href="#pro" className="inline-block md:inline-flex py-1 md:py-3 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto md:mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                <span className="pb-1 md:pb-0 text-lg md:text-base text-gray-600 md:text-gray-400">Dự án</span>
              </a>
            </li>
            <li className="mr-3 flex-1">
              <a href="#abli" className="inline-block md:inline-flex py-1 md:py-3 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span className="pb-1 md:pb-0 text-lg md:text-base text-gray-600 md:text-gray-400">Năng lực</span>
              </a>
            </li>
            <li className="mr-3 flex-1">
              <a href="#cont" className="inline-block md:inline-flex py-1 md:py-3 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="pb-1 md:pb-0 text-lg md:text-base text-gray-600 md:text-gray-400">Liên hệ</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavInfo
