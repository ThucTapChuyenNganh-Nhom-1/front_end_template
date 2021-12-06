import React from 'react'
import Avt from '../../images/long.jpg'

const Info = () => {
  return (
    // <div id="info" className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-3 lg:py-10">
    //   <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
    <div id="info" className="frame_all">
    <div className="pb-4 text-center">
        <h2 className="menu_name">
          Thông tin cá nhân
        </h2>
        <p className="text-xl text-gray-700 text-justify">
          Em hiện là sinh viên chuyên ngành công nghệ
          thông tin năm 4; ưu điểm nhiệt tình, kiên nhẫn,
          ham học hỏi và có khả năng phân tích, lập
          trình, kiểm thử. Em đang tìm kiếm vị trí thực
          tập sinh lập trình web để có thể vận dụng
          những kiến thức đã học về phân tích, thiết kế
          trang web vào trong công việc. Những kinh
          nghiệm và bài học mà em có được trong việc
          thực tập sẽ giúp em xây dựng những kỹ năng
          cần thiết cho nghề nghiệp của em trong tương
          lai.
        </p>
      </div>
      
      <div className="grid gap-3 lg:grid-cols-2 max-w-screen-lg sm:mx-auto lg:max-w-full ">
      {/* <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto"> */}
        <div>
          <img
            className="object-cover w-full h-64 "
            src={Avt}
            alt=""
          />
        </div>
        <div className="grid grid-cols-2 mt-1">
          <div className="mb-4 border-b">
            <h6 className="text-xl mb-2 font-semibold leading-5">
              Họ tên:
            </h6>
            <p className="text-xl text-gray-900">
              Lê Minh Long
            </p>
          </div>
          <div className="mb-4 border-b">
            <h6 className="text-xl mb-2 font-semibold leading-5">
              Ngày sinh
            </h6>
            <p className="text-xl text-gray-900">
              01/06/2000
            </p>
          </div>
          <div className="mb-4 border-b">
            <h6 className="text-xl mb-2 font-semibold leading-5">
              Giới tính
            </h6>
            <p className="text-xl text-gray-900">
              Nam
            </p>
          </div>
          <div className="mb-4 border-b">
            <h6 className="text-xl mb-2 font-semibold leading-5">
              Sở thích
            </h6>
            <p className="text-xl text-gray-900">
            Nghe nhạc, chơi game, bơi lội, ăn uống
            </p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Info
