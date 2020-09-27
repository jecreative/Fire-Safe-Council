import React, { Fragment } from 'react';
import ResourcesSection from '../../layout/ResourcesSection';
import PreparednessHeroSection from '../../layout/PreparednessHero';
import Preparedness from '../../layout/Preparedness';
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
