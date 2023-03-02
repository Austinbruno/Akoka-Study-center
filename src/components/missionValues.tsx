import React from 'react'
import SectionHeader from './sectionHeader'

const MissionValues = () => {
  
  const goals = [
    "Increase the number of past students donating to 70%",
    "Win 10 vocations annually",
    "Provide formation to 10% of all students of Unilag; YabaTech; College of Education (Technology) and St Augustine’s College of Education",
    "Ensure that we update our data (metrics) not later than 7 days.",
    "Update our data (metrics) not later than 7 days.",
    "Ensure that 80% of our graduates get jobs upon graduation.",
    "All our students graduate with a minimum of a second class upper.",
    "Ensure that we get known by 200 corporate organizations in Lagos",
    "Increase our social media and web presence by generating traffic by 5% annually"
  ]

  return (
    <>
      <div className='pl-[75.4px] pr-[15px] justify-between mt-[4rem] grid grid-flow-col gap-[80px] w-[1090px] ml-[30px]'>
        <div>
          <h2 className='text-[#727272] text-[32px] font-bolder'>OUR MISSION</h2>
          <p className='text-[#727272] text-[25px] font-[300] text-justify leading-[35px]'>Akoka Study Centre provides formation to many young men to help them seek excellence  in their work and grow in virtues through cultural, moral, and professional activities.</p>
        </div>

        <div>
          <h2 className='text-[#727272] text-[32px] font-bolder '>OUR VISION</h2>
          <p className='text-[#727272] text-[25px] font-[300] text-justify leading-[35px]'>To inspire young men to be socially responsible and virtuous professionals.</p>
        </div>

      </div>

      <div className='w-[1060px] h-[39] mx-auto'>
       
        <SectionHeader title= "OUR GOALS" />
        <ul className='list-disc pl-[50px] '>
          {goals.map((goal, index) => {
            return (<li className='leading-[3rem] text-[30px] mb-[20px] text-[#727272] mt-[36px]' key={index}>{goal}</li>)
          })}
          
        </ul>
      </div>
    </>
  )
}

export default MissionValues