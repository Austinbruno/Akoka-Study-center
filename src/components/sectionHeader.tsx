import React from 'react'

type SectionHeaderProps = {
  title: string
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <h2 className='text-[32px] text-white font-[300] text-center mt-[64px] bg-[#021D37] p-[20px]'>
      {title}
    </h2>)
}

export default SectionHeader