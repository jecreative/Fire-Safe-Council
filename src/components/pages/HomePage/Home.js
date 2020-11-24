import React, { Fragment } from 'react'
import HeroSection from '../../layout/Hero/HeroSection'
import MainHeroSection from './MainHeroSection'
import FSCMap from '../../layout/FSCMap/FSCMap'
import Maps from '../../layout/Maps/Maps'
import ContactForm from '../../layout/ContactForm/ContactForm'
import {
  homeHeroObj,
  homeNewsObj,
  homeCommunityObj,
  homeLearnMoreObj,
  homeMapObj,
  homeContactObj,
} from './Data'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <Fragment>
      <Helmet>
        <meta
          name='description'
          content='The University City Fire Safe Council aims to foster a fire safe &amp; fire wise region.'
        />
        <title>University City - Fire Safe Council</title>
      </Helmet>
      <MainHeroSection {...homeHeroObj} />

      <FSCMap {...homeMapObj} />

      <HeroSection {...homeNewsObj} />
      <Maps />
      <HeroSection {...homeCommunityObj} />
      <HeroSection {...homeLearnMoreObj} />
      {/* <FeaturedHighlights /> */}

      <ContactForm {...homeContactObj} />
    </Fragment>
  )
}

export default Home
