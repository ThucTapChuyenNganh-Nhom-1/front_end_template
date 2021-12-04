import React from 'react'
import Abilities from './Abilities'
import Connect from './Connect'
import Info from './Info'
import NavInfo from './NavInfo'
import Project from './Project'

const Menu = () => {
  return (
    <>
      {/* bắt đầu nav */}
      <NavInfo />

      <div className="md:ml-44">
        {/* Thông tin */}
        <Info />

        {/* Dự án */}
        <Project />

        {/* Năng lực */}
        <Abilities />

        {/* Liên hệ */}
        <Connect />
      </div>
    </>
  )
}

export default Menu
