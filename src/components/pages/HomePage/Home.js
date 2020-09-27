import React, { Fragment } from 'react';
import HeroSection from '../../layout/HeroSection';
import LearnMoreSection from '../../layout/LearnMoreSection';
import NewsSection from '../../layout/NewsSection';
import EmbedItems from '../../layout/EmbedItems';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
} from './Data';

function Home() {
  return (
    <Fragment>
      <HeroSection {...homeObjOne} />
      <LearnMoreSection {...homeObjFour} />
      <EmbedItems {...homeObjFive} />
      <NewsSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
    </Fragment>
  );
}

export default Home;
