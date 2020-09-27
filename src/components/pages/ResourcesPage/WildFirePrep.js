import React, { Fragment } from 'react';
import PreparednessHeroSection from './PreparednessHero';
import Preparedness from './Preparedness';
import { prepObjOne, prepObjTwo } from './Data';

function WildFirePrep() {
  return (
    <Fragment>
      <PreparednessHeroSection {...prepObjOne} />
      <Preparedness {...prepObjTwo} />
    </Fragment>
  );
}

export default WildFirePrep;
