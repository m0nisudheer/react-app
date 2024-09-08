import React from 'react';
import './Body1.css';
import { FaEarthAfrica } from "react-icons/fa6";
import { PiGearThin } from "react-icons/pi";
import { PiUserCircleGearThin } from "react-icons/pi";

function Body1() {
  return (
    <section id="sec1"> 
        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley.</div>
          <div>
            <aside><FaEarthAfrica /></aside>
            <p>Long-lasting and sustainable </p>
        </div>
        <div>
            <aside><PiGearThin /></aside>
            <p>Long-lasting and sustainable</p>
        </div>
        <div>
            <aside><PiUserCircleGearThin /></aside>
            <p>Long-lasting and sustainable</p>
        </div>
    </section>
  )
}

export default Body1;