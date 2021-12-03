import React from 'react'
import About from './About';
import Project from './Project';
import { SmothScroll } from './SmothScroll';
import Team from './Team';

const Content = () => {

    const bind = SmothScroll('#project')

    return (
        <div className="content ">
            <About />
            <Team />
            <hr {...bind} className="w-7/12 mx-auto my-8 border-gray-300" />
            <Project />
        </div>
    );
}

export default Content