import React from 'react'

import Img1 from '../assets/img/mark-chaves-MiDPt7D4WN8-unsplash.png'
import Img2 from '../assets/img/johnson-wang-iI4sR_nkkbc-unsplash.png'
import Img3 from '../assets/img/lukasz-niescioruk-LHgq4S_Zk2w-unsplash.png'
import Img4 from '../assets/img/alissa-de-leva-k6x-ZXSDV3Y-unsplash.png'
import Img5 from '../assets/img/mildly-useful-sF0WlRsQdok-unsplash.png'
import Img6 from '../assets/img/benjamin-child-0sT9YhNgSEs-unsplash.png'
import Img7 from '../assets/img/nasa-Q-1.png'
import Img8 from '../assets/img/s-o-c-i-a-l-c-u-t-EwQhB-1.png'
import Img9 from '../assets/img/alesia-kazantceva-VWcPlbHglYc-unsplash.png'
import Img10 from '../assets/img/kara-eads-L7EwHkq1B2s-unsplash.png'
import Img11 from '../assets/img/david-fintz-z-Jaxjj0KVY-unsplash.png'
import Img12 from '../assets/img/cowomen-1hlFqUdFv1s-unsplash.png'
import ImgSearch from '../assets/img/icons8-search-500.svg'

export default function Home () {
  return (
    <>
      <div className='homeHeader'>

        <section className='searchbar'>
          <div className='container'>
            <div className='instruct'>
              <p>Find your zoom <span>background</span></p>
            </div>
            <div className='search'>
              <input type='search' placeholder='Type here...' />
              <img src={ImgSearch} alt='search icon' />
            </div>
          </div>
        </section>
      </div>

      <div className='library'>
        <section className='grid-container'>
          <ul>
            <li><img src={Img1} alt='#' /></li>
            <li><img src={Img2} alt='#' /></li>
            <li><img src={Img3} alt='#' /></li>
            <li><img src={Img4} alt='#' /></li>
            <li><img src={Img5} alt='#' /></li>
            <li> <img src={Img6} alt='#' /></li>
            <li> <img src={Img7} alt='#' /></li>
            <li><img src={Img8} alt='#' /></li>
            <li> <img src={Img9} alt='#' /></li>
            <li> <img src={Img10} alt='#' /></li>
            <li><img src={Img11} alt='#' /></li>
            <li><img src={Img12} alt='#' /></li>
            <li><img src={Img4} alt='#' /></li>
            <li> <img src={Img5} alt='#' /></li>
            <li><img src={Img6} alt='#' /></li>
            <li> <img src={Img7} alt='#' /></li>
            <li><img src={Img8} alt='#' /></li>
            <li><img src={Img9} alt='#' /></li>
          </ul>
        </section>

      </div>
    </>
  )
}
