import React from 'react'

import ImgSearch from '../assets/img/icons8-search-500.svg'
import Img1 from '../assets/img/kate-sade-2zZp12ChxhU-unsplash.png'
import Img2 from '../assets/img/s-o-c-i-a-l-c-u-t-1RT4txDDAbM-unsplash.png'
import Img3 from '../assets/img/nastuh-abootalebi-rSpMla5RItA-unsplash.png'
import Img4 from '../assets/img/s-o-c-i-a-l-c-u-t-EwQhB-1.png'
import Img5 from '../assets/img/nastuh-abootalebi-eHD-1.png'
import Img6 from '../assets/img/copernico-p_kICQCOM-1.png'
import Img7 from '../assets/img/alex-kotliarskyi-QBpZGqEMsKg-unsplash.png'
import Img8 from '../assets/img/israel-andrade-YI_-1.png'
import Img9 from '../assets/img/mario-gogh-VBLHICVh-lI-unsplash.png'
import Img10 from '../assets/img/laura-davidson-QBAH4IldaZY-unsplash.png'
import Img11 from '../assets/img/samantha-gades-BlIhVfXbi9s-unsplash.png'
import Img12 from '../assets/img/alesia-kazantceva-VWcPlbHglYc-unsplash.png'
import ellipseIcon from '../assets/img/Ellipse 2.svg'
import xIcon from '../assets/img/×.svg'
import portrait from '../assets/img/woman110.png'

export default function Preview () {
  return (
    <div className='preview'>
      <div className='result'>
        <div className='container'>
          <div className='search'>
            <div className='search-inner'>
              <input type='search' value='Office space' />
              <img src={ImgSearch} alt='' />
            </div>
          </div>
          <div className='search-office'>
            <p>Search <b>"Office space"</b></p>
          </div>
        </div>
        <main className='grid-container'>
          <ul>
            <li><img src={Img1} alt='#' /></li>
            <li><img src={Img2} alt='#' /></li>
            <li><img src={Img3} alt='#' /></li>
            <li><img src={Img4} alt='#' /></li>
            <li><img src={Img5} alt='#' /></li>
            <li><img src={Img6} alt='#' /></li>
            <li><img src={Img7} alt='#' /></li>
            <li><img src={Img8} alt='#' /></li>
            <li><img src={Img9} alt='#' /></li>
            <li><img src={Img10} alt='#' /></li>
            <li><img src={Img11} alt='#' /></li>
            <li><img src={Img12} alt='#' /></li>
            <li><img src={Img4} alt='#' /></li>
            <li><img src={Img5} alt='#' /></li>
            <li><img src={Img6} alt='#' /></li>
            <li><img src={Img1} alt='#' /></li>
            <li><img src={Img2} alt='#' /></li>
            <li><img src={Img3} alt='#' /></li>
            <li><img src={Img7} alt='#' /></li>
            <li><img src={Img8} alt='#' /></li>
            <li><img src={Img9} alt='#' /></li>
          </ul>
        </main>
      </div>
      <div id='preview'>
        <div className='preview-icon'>
          <img src={ellipseIcon} className='ellipse' alt='...' />
          <img src={xIcon} className='x-icon' alt='...' />
        </div>
        <div className='figure1'>
          <div className='image'>
            <img src={Img6} className='figure-img' alt='...' />
          </div>
          <div className='caption'>
            <div className='figure-caption'>
              <p className='textstart'> Office #1</p>
              <p className='textend'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            </div>
          </div>
        </div>
        <div className='sm-fig'>
          <p>Preview</p>
          <div className='figure2'>
            <div className='image'>
              <img src={portrait} className='portrait' alt='...' />
              <img src={Img6} className='back-img' alt='...' />
            </div>
            <div className='caption'>
              <input type='submit' value='Download' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
