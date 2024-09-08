import React from 'react';
import './Body6.css';
import Categories from './Categories';

function Body6() {

    const Data = {
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9DKcQnifJGE9352FN-cQTaKjkUu84O2NPA&s',
        title: 'Washing'
      };
  return (
         <section id="sec7">
            <div>
                <p>Lorem ipsum, dolor Lor</p>
            </div>
            <Categories imageSrc={Data.imageSrc} title={Data.title} />
            <Categories imageSrc={Data.imageSrc} title={Data.title} />
            <Categories imageSrc={Data.imageSrc} title={Data.title} />
                    {/* <div>
                <p>Lorem ipsum, dolor Lor</p>
            </div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9DKcQnifJGE9352FN-cQTaKjkUu84O2NPA&s'/>
                <h1>Washing</h1>
            </div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9DKcQnifJGE9352FN-cQTaKjkUu84O2NPA&s'/>
                <h1>Washing</h1>
            </div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9DKcQnifJGE9352FN-cQTaKjkUu84O2NPA&s'/>
                <h1>Washing</h1>
            </div> */}
</section>
  )
}

export default Body6