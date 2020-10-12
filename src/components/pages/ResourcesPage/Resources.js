import React, { Fragment, useEffect } from 'react'
import PreparednessHeroSection from './PreparednessHero'
import { resourcesObjOne, resourcesObjTwo, resourcesObjThree } from './Data'

function Resources() {
  useEffect(() => {
    document.title = 'Resources - Fire Safe Council'
  }, [])
  return (
    <Fragment>
      <PreparednessHeroSection {...resourcesObjOne} />
      <PreparednessHeroSection {...resourcesObjTwo} />
      <PreparednessHeroSection {...resourcesObjThree} />
    </Fragment>
  )
}

export default Resources
