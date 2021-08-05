import React from 'react'

import Footer from '../components/Common/Footer'

import ImgSearch from '../assets/img/icons8-search-500.svg'
import Img1 from '../assets/img/samantha-gades-BlIhVfXbi9s-unsplash.png'
import Img2 from '../assets/img/nastuh-abootalebi-eHD-1.png'
import Img3 from '../assets/img/laura-davidson-QBAH4IldaZY-unsplash.png'
import Img4 from '../assets/img/alex-kotliarskyi-QBpZGqEMsKg-unsplash.png'

export default function Favorites () {
  return (
    <div id='favorite'>

      <section className='navbar header'>
        <div className='container'>
          <nav className='zoom'>
            <b>Z</b>oomglam
          </nav>
          <nav className='navigation'>
            <hr />
            <input type='button' value='Favorites' />
          </nav>
        </div>
        <div className='tags'>
          <nav>
            <input type='submit' value='Orange Background' />
            <input type='submit' value='Black Background' />
            <input type='submit' value='Texture Background' />
            <input type='submit' value='Office' />
            <input type='submit' value='Meeting' />
            <input type='submit' value='Casual' />
            <input type='submit' value='Forest' />
            <input type='submit' value='Book' />
            <input type='submit' value='Ocean' />
            <input type='submit' value='House' />
            <input type='submit' value='Car' />
            <input type='submit' value='Sunrise' />
            <input type='submit' value='Coffee' />
            <input type='submit' value='Space' />
            <input type='submit' value='Tech' />
            <input type='submit' value='Room' />
            <input type='submit' value='Sunset' />
            <input type='submit' value='Red Background' />
          </nav>
        </div>
      </section>

      <div className='favorite'>
        <div className='container'>
          <div className='search'>
            <div className='search-inner'>
              <input type='search' value='Office space' />
              <img src={ImgSearch} alt='' />
            </div>
          </div>
          <div className='title'>
            <p>Favorites</p>
          </div>
        </div>
        <main className='grid-container'>
          <ul>
            <li>
              <img src={Img1} alt='#' />
              <input type='submit' value='-' className='mobile' />
              <input type='submit' value='Remove' className='remove' />
              <input type='submit' value='Download' className='download' />
            </li>
            <li>
              <img src={Img2} alt='#' />
              <input type='submit' value='-' className='mobile' />
              <input type='submit' value='Remove' className='remove' />
              <input type='submit' value='Download' className='download' />
            </li>
            <li>
              <img src={Img3} alt='#' />
              <input type='submit' value='-' className='mobile' />
              <input type='submit' value='Remove' className='remove' />
              <input type='submit' value='Download' className='download' />
            </li>
            <li>
              <img src={Img4} alt='#' />
              <input type='submit' value='-' className='mobile' />
              <input type='submit' value='Remove' className='remove' />
              <input type='submit' value='Download' className='download' />
            </li>
          </ul>
        </main>

        <Footer />

      </div>
    </div>
  )
}
