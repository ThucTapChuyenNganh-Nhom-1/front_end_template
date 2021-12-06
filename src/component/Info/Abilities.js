import React from 'react'

const abilities = [
  // kỹ năng, ngôn ngữ, công cụ
  // {
  //   autID: "NV01",
  //   kyNang: ['PHP', 'Laravel Framework', 'Bootstrap Framework', 'PHP', 'Laravel Framework', 'Bootstrap Framework'],
  //   ngonNgu: ['PHP1', 'Laravel Framework1', 'Bootstrap Framework1'],
  //   congCu: ['PHP2', 'Laravel Framework2', 'Bootstrap Framework2'],
  // },
  // {
  //   autID: "NV02",
  //   kyNang: ['PHP3', 'Laravel Framework', 'Bootstrap Framework'],
  //   ngonNgu: ['PHP4', 'Laravel Framework', 'Bootstrap Framework'],
  //   congCu: ['PHP5', 'Laravel Framework', 'Bootstrap Framework'],
  // },
  // {
  //   autID: "NV03",
  //   kyNang: ['PHP6', 'Laravel Framework', 'Bootstrap Framework'],
  //   ngonNgu: ['PHP7', 'Laravel Framework', 'Bootstrap Framework'],
  //   congCu: ['PHP8', 'Laravel Framework', 'Bootstrap Framework'],
  // }
]

const Abilities = () => {
  return (
    <div id="abli" className="frame_all">
      <div className="title">
        <h2 className="menu_name">
          Năng lực
        </h2>
      </div>
      <div className="grid max-w-md gap-5 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3 text-lg">
        {
          abilities.map((item) => (
            <div>
              {/* bắt đầu kỹ năng */}
              <div>
                <h6 className="mb-2 font-semibold leading-5">Kỹ năng</h6>
                <ul className="grid lg:grid-cols-2 md:grid-cols-3 grid-cols-2 gap-1">
                  {
                    item.kyNang.map((tenkn) => (
                      <li className="flex items-start">
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
                        {tenkn}
                      </li>
                    ))
                  }
                </ul>
              </div>
              {/* kết thúc kỹ năng */}

              {/* bắt đầu Ngôn ngữ */}
              <div>
                <h6 className="mb-2 font-semibold leading-5">Ngôn ngữ</h6>
                <ul className="grid lg:grid-cols-2 md:grid-cols-3 grid-cols-2 gap-1">
                {
                    item.ngonNgu.map((tennn) => (
                      <li className="flex items-start">
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
                        {tennn}
                      </li>
                    ))
                  }
                  </ul>
              </div>
              {/* kết thúc Ngôn ngữ */}

              {/* bắt đầu Công cụ */}
              <div>
                <h6 className="mb-2 font-semibold leading-5">Công cụ</h6>
                <ul className="grid lg:grid-cols-2 md:grid-cols-3 grid-cols-2 gap-1">
                {
                    item.congCu.map((tencc) => (
                      <li className="flex items-start">
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
                        {tencc}
                      </li>
                    ))
                  }
                </ul>
              </div>
              {/* kết thúc Công cụ */}
            </div>
          ))
        }

        {/* bắt đầu kỹ năng */}
        <div>
          <h6 className="mb-2 font-semibold leading-5">Kỹ năng</h6>
          <ul className="grid lg:grid-cols-2 md:grid-cols-3 grid-cols-2 gap-1">
            <li className="flex items-start">
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
              </span>Computers</li>
            <li className="flex items-start">
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
              </span>Computers</li>
            <li className="flex items-start">
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
              </span>Computers</li>
            <li className="flex items-start">
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
              </span>Computers</li>
            <li className="flex items-start">
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
              </span>Computers</li>
            <li className="flex items-start">
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
              </span>Computers</li>
          </ul>
        </div>
        {/* kết thúc kỹ năng */}

        {/* bắt đầu Ngôn ngữ */}
        <div>
          <h6 className="mb-2 font-semibold leading-5">Ngôn ngữ</h6>
          <ul className="grid lg:grid-cols-2 md:grid-cols-3 grid-cols-2 gap-1">
            <li className="flex items-start">
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
              </span>Computers</li>
            <li className="flex items-start">
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
              </span>Computers</li>
            <li className="flex items-start">
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
              </span>Computers</li>
            <li className="flex items-start">
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
              </span>Computers</li>
            <li className="flex items-start">
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
              </span>Computers</li>
            <li className="flex items-start">
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
              </span>Computers</li>
          </ul>
        </div>
        {/* kết thúc Ngôn ngữ */}

        {/* bắt đầu Công cụ */}
        <div>
          <h6 className="mb-2 font-semibold leading-5">Công cụ</h6>
          <ul className="grid lg:grid-cols-2 md:grid-cols-3 grid-cols-2 gap-1">
            <li className="flex items-start">
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
              </span>Computers</li>
            <li className="flex items-start">
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
              </span>Computers</li>
            <li className="flex items-start">
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
              </span>Computers</li>
            <li className="flex items-start">
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
              </span>Computers</li>
            <li className="flex items-start">
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
              </span>Computers</li>
            <li className="flex items-start">
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
              </span>Computers</li>
          </ul>
        </div>
        {/* kết thúc Công cụ */}
      </div>
    </div>
  )
}

export default Abilities
