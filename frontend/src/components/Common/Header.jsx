import React from 'react'

import ImgSearch from '../../assets/img/icons8-search-500.svg'

export default function Header () {
  return (
    <div>
      <header>
        <section className='navbar'>
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
      </header>
    </div>
  )
}