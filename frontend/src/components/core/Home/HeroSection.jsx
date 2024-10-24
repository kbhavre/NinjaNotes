import React from 'react'
import { Link } from 'react-router-dom'
import NumberTicker from '../../magicui/NumberTicker'
import Particles from '../../magicui/Particles'
import heroImg from "../../../assets/images/1.png"
import ParticlesBackground from  "../../Particles/ParticlesBackground"
import ServiceCard from './ServiceCard'
import HighlightText from '../../common/HighlightText'
import CountUp from "react-countup"
import Flipwords from "../../aceternity/Flipwords/FlipwordComponent"

const HeroSection = () => {

  // const color = '#64AE06';
  const color = '#000'
  const words = ["Potential", "Skills", "Exams", "Interview","Journey"];

  return (
    <div className=''>   
        <div className='bg-white w-full mt-[-10rem]  lg:max-h-[740px] lg:h-[740px] lg:pb-0'>
        <Particles
          className='absolute left-0 top-0 w-full h-[1010px] sm:h-[1000px] md:h-[980px] lg:h-[740px] xl:h-[740px]'
          quantity={250}
          ease={70}
          color={color}
          size={0.8}
        />
        {/* <ParticlesBackground  /> */}

        {/*  Main Part of Hero section */}
        <div className='relative mx-auto w-11/12 max-w-maxContent mt-[11.2rem] pt-[7.7rem] text-tempDark flex flex-col justify-between gap-y-6 items-center lg:flex-row '>
          <div data-aos="fade-right" data-aos-duration='1200' className='lg:w-[50%] max-w-maxContent flex flex-col items-center lg:items-start gap-y-5'>
            <h2  className='text-tempDark font-semibold text-5xl md:text-6xl text-center lg:text-left w-full'>
              Unlock Your <Flipwords words={words} /> <br/>
              {/* <HighlightText text={" Academic Potential "} className={"text-6xl"}/>   */}
              with us
            </h2>
            <p  className='para text-center lg:text-left text-tempDark'>
              Welcome to our notes website, where you can access a wide range of
              university notes and last year papers. Explore our collection and
              enhance your learning experience today.
            </p>
            <div className='flex gap-x-5 justify-center lg:justify-start'>
              {/* <Link to=''> */}
                <a href='#services' className='btn hover:bg-tempPrimary bg-tempSecondary border-2 border-tempPrimary transition-all duration-300'>
                  Learn More
                </a>
              {/* </Link> */}
              <Link to='/notes'>
                <button className='btn border-2 border-black hover:bg-black hover:text-white transition-all duration-300'>
                  Get Notes
                </button>
              </Link>
            </div>

            {/* Number Ticker */}
            <div className='flex gap-14 justify-center items-center md:justify-start'>
              <div>
                <h2 className='font-bold text-tempDark'>
                   <CountUp start={-100} end={30} duration={2.75} suffix=" +"></CountUp>
                </h2>
                <p className=' text-dargGreen font-semibold mt-[-24px]'>Subjects</p>
              </div>
              <div>
                <h2 className='font-bold text-tempDark'>
                  <CountUp start={-100} end={50} duration={3.75} suffix=" +"></CountUp>
                </h2>
                <p className=' text-dargGreen font-semibold pl-[6px] mt-[-24px]'>Notes</p>
              </div>
            </div>

          </div>

          <div data-aos="fade-left" data-aos-duration='1200' className='pt-10 md:pt-0  '>
            <img src={heroImg} width={500} />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default HeroSection
