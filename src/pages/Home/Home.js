import React from 'react'
import Banner from '../../compontes/Banner/Banner'
import Hero from '../../compontes/Hero/Hero'
import Collection from '../../compontes/Collection/Collection'
import {useState} from 'react'

const Home = () => {
  return (
     <>
    <Banner />
    <Hero />
    <Collection/>
  </>
  )
}

export default Home