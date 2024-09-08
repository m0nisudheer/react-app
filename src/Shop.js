import React from 'react'
import './Shop.css';
import Product from './Product';
import Object from './Object';
function Shop() {

//     const product = [{
//         name: 'Doctor lorem',
//         price: 500,
//         oldPrice: 600,
//         img: 'https://static.vecteezy.com/system/resources/thumbnails/041/165/967/small_2x/ai-generated-liquid-serum-bottle-mockup-isolated-on-background-illustration-generic-cosmetic-transparent-background-png.png'
//       },
//       {
//         name: 'Doctor lorem',
//         price: 500,
//         oldPrice: 600,
//         img: 'https://m.media-amazon.com/images/I/61fnBaehsFL.jpg'
//       },
//       {
//         name: 'Doctor lorem',
//         price: 500,
//         oldPrice: 600,
//         img: 'https://img.freepik.com/premium-photo/white-glass-dropper-serum-bottle-white-background_99974-867.jpg'
//       },
//       {
//         name: 'Doctor lorem',
//         price: 500,
//         oldPrice: 600,
//         img: 'https://static.vecteezy.com/system/resources/previews/002/740/566/original/facial-serum-over-a-white-background-free-vector.jpg'
//       },
//       {
//         name: 'Doctor lorem',
//         price: 500,
//         oldPrice: 600,
//         img: 'https://png.pngtree.com/png-clipart/20240329/original/pngtree-serum-product-white-background-copy-png-image_14708751.png'
//       },
      
      
//       ];

  return (
<section id="shop"> 
    {
        Object.map((ele, index) => (
        <Product key={index} product={ele} />
    ))
    }
    {/* <Product product={Object[0]}/>
    <Product product={Object[1]}/>
    <Product product={Object[2]}/>
    <Product product={Object[3]}/>
    <Product product={Object[4]}/>
    <Product product={Object[5]}/>
    <Product product={Object[6]}/>
    <Product product={Object[7]}/>
    <Product product={Object[8]}/>
    <Product product={Object[9]}/> */}
</section>


  )
}

export default Shop;

