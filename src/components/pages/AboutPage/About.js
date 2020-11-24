import React, { Fragment, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import AboutHeroSection from './AboutHeroSection'
import { aboutHeroObj, aboutMissionObj, aboutWhoWeAreObj } from './Data'
import './AboutHeroSection.css'

function About() {
  useEffect(() => {
    document.title = 'About - Fire Safe Council'
  }, [])

  return (
    <Fragment>
      <Helmet>
        <meta
          name='description'
          content='The University City Fire Safe Council (UCFSC), is part of a California non-profit corporation, first formed as a project of the California Department of Forestry and Fire Protection (CAL FIRE) in 1993.'
        />
        <title>About - Fire Safe Council</title>
      </Helmet>
      <AboutHeroSection {...aboutHeroObj} />
      <AboutHeroSection {...aboutMissionObj} />
      <AboutHeroSection {...aboutWhoWeAreObj} />
    </Fragment>
  )
}

export default About
