import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchImages } from '../../reducks/images/operations'

const Images = ({ images }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchImages(images))
  }, [dispatch, images])

  return (
    <ul>
      {images.image && (
        images.map((image, index) => {
          return (
            <li key={index}>
              <img src={image} alt='' />
            </li>
          )
        })
      )}
    </ul>
  )
}

export default Images
