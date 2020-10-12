import React, { Fragment } from 'react'
import PreparednessHeroSection from './PreparednessHero'
import Preparedness from './Preparedness'
import { prepObjOne, prepObjTwo } from './Data'
import { Helmet } from 'react-helmet'

function WildFirePrep() {
  return (
    <Fragment>
      <Helmet>
        <title>Wild Fire Preparedness - Fire Safe Council</title>
        <meta
          name='description'
          content='This page contains a number of resources to help you prepare your family and your home for the risk of wildfire. Here you will find valuable information about what to do before, during, and after a wildfire emergency.'
        />
      </Helmet>

      <PreparednessHeroSection {...prepObjOne} />
      <Preparedness {...prepObjTwo} />
    </Fragment>
  )
}

export default WildFirePrep
