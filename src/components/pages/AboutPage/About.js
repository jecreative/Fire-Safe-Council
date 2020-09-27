import React, { Fragment } from 'react';
import AboutHeroSection from './AboutHeroSection';
import { aboutHeroObj } from './Data';
import './AboutHeroSection.css';

function About() {
  return (
    <Fragment>
      <AboutHeroSection {...aboutHeroObj} />
    </Fragment>
  );
}

export default About;
