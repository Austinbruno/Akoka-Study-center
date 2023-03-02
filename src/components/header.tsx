import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'

const Header = () => {
  const logo = "/assets/images/mainlogo.svg"
  const facebook = "/assets/images/facebooklogo.svg"
  const instagram = "/assets/images/instagram.svg"
  const linkedin = "/assets/images/linkedinlogo.svg"
  const twitter = "/assets/images/Twitter.svg"
  const whatsapp = "/assets/images/whatsapplogo.svg"

  const icons = [
    facebook, instagram, linkedin, twitter, whatsapp
  ]
  const links = [
    {
      name: "ABOUT",
      href: "/about"
    },
    {
      name: "PROGRAMS",
      href: "/programs"
    },
    {
      name: "RESOURCES",
      href: "/resources"
    },
    {
      name: "CONTACT US",
      href: "/contact"
    },
    {
      name: "DONATE",
      href: "/donate"
    },


  ]

  return (
    <div className='flex p-[27px_91px] justify-between items-center bg-white shadow-xl'  >
      <div className="">
        <Image src={logo} alt='logo' width={238} height={47} />
      </div>

      <div>
        {links.map((link, index) => (
          <Link key={index} href={link.href} className='text-black text-[20px] px-[20px] hover:bg '>{link.name}</Link>
        ))} 
      </div>
    </div>
  )
}

export default Header