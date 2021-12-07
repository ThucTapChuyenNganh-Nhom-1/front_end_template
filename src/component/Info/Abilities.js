import React from 'react'
import { SmothScroll } from '../Home/SmothScroll'

const abilities =
  [
    {
      nameAbl:"Kỹ năng",
      nangluc: ['PHP', 'Laravel Framework','Bootstrap Framework', 'PHP', 'Laravel Framework', 'Bootstrap Framework'],
    },
    {
      nameAbl:"Ngôn ngữ",
      nangluc: ['Tiếng việt', 'Anh', 'Trung'],
    },
    {
      nameAbl:"Công cụ",
      nangluc: ['PHP2', 'Laravel Framework2', 'Bootstrap Framework2'],
    }
  ]

const Abilities = () => {
  const bind = SmothScroll('#abli')

  return (
    <div {...bind} className="frame_all fadeInUp">
      <div className="title">
        <h2 className="menu_name">
          Năng lực
        </h2>
      </div>

      <div className="grid max-w-md gap-5 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3 text-base">
        {
          abilities.map((item) => (
            <div key={item.nameAbl}>
              <h6 className="mb-2 font-semibold leading-5">{item.nameAbl}</h6>
              <ul className="grid lg:grid-cols-2 md:grid-cols-3 grid-cols-2 gap-1">
                {
                  item.nangluc.map((name, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-1">
                        <svg
                          className="w-5 h-5 mt-px text-deep-purple-accent-400"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </span>
                      {name}
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Abilities
