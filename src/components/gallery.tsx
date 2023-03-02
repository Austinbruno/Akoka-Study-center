import Image from 'next/legacy/image'
import React from 'react'
import SectionHeader from './sectionHeader'

const Gallery = () => {
  const images = [
    "/assets/images/img1.jpg",
    "/assets/images/img2.jpg",
    "/assets/images/img3.jpg",
    "/assets/images/img4.jpg",
    "/assets/images/img5.jpg",
    "/assets/images/img6.jpg",
    "/assets/images/img7.jpg",
  ]
  return (
    <div className='w-[1060px] mx-auto mb-[80px]'>
      <SectionHeader title="GALLERY" />

      <div className='grid grid-cols-3 gap-[20px]  mt-[30px]'>
        {images.map((image, index) => (
          <Image key={index} src={image} alt="image" width={350} height={300} objectFit="cover" objectPosition="0 20px"/>
        ))}
      </div>
    </div>
  )
}

export default Gallery