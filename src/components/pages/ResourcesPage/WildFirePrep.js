import React, { Fragment, useEffect } from 'react'
import PreparednessHeroSection from './PreparednessHero'
import Preparedness from './Preparedness'
import { prepObjOne, prepObjTwo } from './Data'

function WildFirePrep() {
  useEffect(() => {
    document.title = 'Wild Fire Preparedness - Fire Safe Council'
  }, [])
  return (
    <Fragment>
      <PreparednessHeroSection {...prepObjOne} />
      <Preparedness {...prepObjTwo} />
    </Fragment>
  )
}

export default WildFirePrep
