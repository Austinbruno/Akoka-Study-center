import Image from 'next/image'
import Link from "next/link"
import React from 'react'

const Showcase = () => {
  return (
    <div className=" h-[330px] relative ">
      <Image src='/assets/images/home.jpg' alt="showcase" layout='fill' objectFit='cover' />
      <div className='absolute top-[70px] left-[70px] ' >
        <p className='text-[70px] w-[553.078px] mb-[30px] leading-[84px] text-white'>Professionalism Begins in College</p>

        <Link href="/about" className='text-white bg-[#021D37] p-[10px_20px_10px_20px] rounded-[5px] mt-[20px] '>Read More</Link>
       </div>

    </div>
  )
}

export default Showcase 