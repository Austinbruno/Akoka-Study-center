import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/header'
import Showcase from '@/components/showcase'
import { Inter } from 'next/font/google'
import MissionValues from '@/components/missionValues'
import Footer from '@/components/footer'
import Gallery from '@/components/gallery'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <div className='sticky z-[34] w-full top-0 ' >
        <Header />
      </div>
      <Showcase />
      <MissionValues />
      <Gallery/>
      <Footer/>
    </>
  )
}
