import React, { Fragment } from 'react';
import HeroSection from '../../layout/Hero/HeroSection';
import FSCMap from '../../layout/FSCMap/FSCMap';
import FeaturedHighlights from '../../layout/Featured/FeaturedHighlights';
import ContactForm from '../../layout/ContactForm/ContactForm';
import {
  homeHeroObj,
  homeNewsObj,
  homeCommunityObj,
  homeLearnMoreObj,
  homeMapObj,
  homeContactObj,
} from './Data';

function Home() {
  return (
    <Fragment>
      <HeroSection {...homeHeroObj} />
      <HeroSection {...homeLearnMoreObj} />
      <FSCMap {...homeMapObj} />
      <HeroSection {...homeNewsObj} />
      {/* <FeaturedHighlights /> */}
      <HeroSection {...homeCommunityObj} />
      <ContactForm {...homeContactObj} />
    </Fragment>
  );
}

export default Home;
