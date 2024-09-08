import React from 'react'
import './Body3.css';
import Product from './Product';
import Object from './Object';

function Body3() {
  return (
  
<section id="sec4"> 
<div>
    <h1>Our Products</h1>
  </div>
  {Object.slice(0, 4).map((ele, index) => (
    <Product key={index} product={ele} />
))}
    {/* <Product product={Object[0]} />
    <Product product={Object[1]} />
    <Product product={Object[2]} />
    <Product product={Object[3]} /> */}

    
    {/* <div><h1>Our Products</h1></div>
    <div>
    <img src='https://symbiologicsystem.com/cdn/shop/files/Serum_hydratant_drainant.jpg?v=1704211029'/>
    <h2>Doctor lorem</h2>
    <p >Rs:500/-</p>
    <strike>Rs:600/-</strike>
    <input type="button"  value="Shop now"/>
    </div>
    <div>
    <img src='https://symbiologicsystem.com/cdn/shop/files/Serum_hydratant_drainant.jpg?v=1704211029'/>
    <h2>Doctor lorem</h2>
    <p >Rs:500/-</p>
    <strike>Rs:600/-</strike>
    <input type="button"  value="Shop now"/>
    </div>
    <div>
    <img src='https://symbiologicsystem.com/cdn/shop/files/Serum_hydratant_drainant.jpg?v=1704211029'/>
    <h2>Doctor lorem</h2>
    <p >Rs:500/-</p>
    <strike>Rs:600/-</strike>
        <input type="button" value="Shop now"/>
    </div>
	<div>
    <img src='https://symbiologicsystem.com/cdn/shop/files/Serum_hydratant_drainant.jpg?v=1704211029'/>
    <h2>Doctor lorem</h2>
    <p >Rs:500/-</p>
    <strike>Rs:600/-</strike>
        <input type="button"  value="Shop now"/>
    </div> */}
</section>
  )
}

export default Body3