import React, { Fragment } from 'react';
import AboutHeroSection from './AboutHeroSection';
import {
  aboutHeroObj,
  aboutMissionObj,
  aboutWhoWeAreObj,
  aboutFundingObj,
} from './Data';
import './AboutHeroSection.css';

function About() {
  return (
    <Fragment>
      <AboutHeroSection {...aboutHeroObj} />
      <AboutHeroSection {...aboutMissionObj} />
      <AboutHeroSection {...aboutWhoWeAreObj} />
      <AboutHeroSection {...aboutFundingObj} />
    </Fragment>
  );
}

export default About;
