import React, { Fragment } from 'react';
import PreparednessHeroSection from './PreparednessHero';
import { resourcesObjOne, resourcesObjTwo, resourcesObjThree } from './Data';

function Resources() {
  return (
    <Fragment>
      <PreparednessHeroSection {...resourcesObjOne} />
      <PreparednessHeroSection {...resourcesObjTwo} />
      <PreparednessHeroSection {...resourcesObjThree} />
    </Fragment>
  );
}

export default Resources;
