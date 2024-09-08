import React from 'react';
import './Body.css';

function Body() {
  return (
    <section id="sec"> 
        <div><h1>Look within yourself and discover</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <a href="#ViewCollection" className="button">View Collection</a>
        </div>
        <div>
            <img src='https://media.istockphoto.com/id/1314362479/photo/caucasian-young-man-use-facial-cream-for-healthy-skin.jpg?s=612x612&w=0&k=20&c=EgAVutz4znFYInuxJRZmSr4k8p01hipR-NQQhDLS1UY=' alt='Body img'/>
        </div>
    </section>
  )
}

export default Body