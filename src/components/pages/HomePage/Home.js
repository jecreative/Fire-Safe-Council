import React, { Fragment } from 'react';
import HeroSection from '../../layout/Hero/HeroSection';
import MainHeroSection from './MainHeroSection';
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
      <MainHeroSection {...homeHeroObj} />

      <FSCMap {...homeMapObj} />

      <HeroSection {...homeNewsObj} />
      <HeroSection {...homeLearnMoreObj} />
      <HeroSection {...homeCommunityObj} />
      <FeaturedHighlights />

      <ContactForm {...homeContactObj} />
    </Fragment>
  );
}

export default Home;
