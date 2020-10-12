import React, { Fragment, useEffect } from 'react'
import PreparednessHeroSection from './PreparednessHero'
import { resourcesObjOne, resourcesObjTwo, resourcesObjThree } from './Data'
import { Helmet } from 'react-helmet'

function Resources() {
  useEffect(() => {
    document.title = 'Resources - Fire Safe Council'
  }, [])
  return (
    <Fragment>
      <Helmet>
        <title>Resources - Fire Safe Council</title>
        <meta
          name='description'
          content='Here you will find valuable information about what to do before, during, and after a wildfire emergency.'
        />
      </Helmet>
      <PreparednessHeroSection {...resourcesObjOne} />
      <PreparednessHeroSection {...resourcesObjTwo} />
      <PreparednessHeroSection {...resourcesObjThree} />
    </Fragment>
  )
}

export default Resources
