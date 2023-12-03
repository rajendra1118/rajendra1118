import React from 'react'
import HeroSection from '../HeroSection'
import { AboutMe } from '../AboutMe'
import { MyPortfolio } from '../MyPortfolio'
import { MySkills } from '../MySkills'
import {ContactMe} from '../ContactMe'



export const Home = () => {
  return (
    <>
    
      <HeroSection/>
      <AboutMe/>
      <MySkills/>
      <MyPortfolio/>
      <ContactMe/>
     
     
    </>
  )
}
