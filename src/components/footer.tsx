import React from 'react'
import Image from 'next/legacy/image'
const Footer = () => {
  const logo = "/assets/images/mainlogo.svg"


  const facebook = "/assets/images/facebooklogo.svg"
  const instagram = "/assets/images/instagram.svg"
  const linkedin = "/assets/images/linkedinlogo.svg"
  const twitter = "/assets/images/Twitter.svg"
  const whatsapp = "/assets/images/whatsapplogo.svg"

  const icons = [
    facebook, instagram, linkedin, twitter, whatsapp
  ]
  const footerContent = [

    {
      heading: "Resources",
      contents: ["Books", "Articles", "Videos", "OPUS DEI"]
    },
    {
      heading: "Contacts",
      contents: ["unyimebruno@gmail.com", "+234 814-5080-202", "+234 814-5080-202"]
    },
    {
      heading: "Programs",
      contents: ["Theology Class", "Professional Mentorship", "Akoka Book Club", "Weekly Meditation", "Monthly Days Of Recollection"]
    },

  ]

  return (
    <>

      <div className='bg-[#EBEDEF] pl-[86px] pr-[40px] pt-[54px] flex justify-between  pb-[70px]'>
        <div className=''>
          <Image src={logo} alt='logo' width={200} height={54} />
          <p className='text-[18px] font-[400] w-[500px] text-justify'>Akoka Study Center is Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolorum alias aperiam provident illo laboriosam tempora ratione excepturi nihil neque? </p>
        </div>
        {footerContent.map((footer, index) => {
          return (
            <div key={index} className=''>
              <h2 className='text-[22px]'>{footer.heading}</h2>
              <ul className='flex flex-col'>
                {footer.contents.map((item, index) => (
                  <li key={index} className='block'>{item}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      <div className='bg-[#021D37] flex justify-between text-white p-[20px] ' >
        <p>Copyright 2023 Akoka Study Center | All Rights Reserved</p>
        <div >{icons.map((icon, index) => (
          <Image key={index} alt="icon" src={icon} width={54} height={34} className="" />
        ))}</div>
      </div>
    </>
  )
}

export default Footer