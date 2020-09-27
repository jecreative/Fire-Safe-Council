import React from 'react';
import Posts from './Posts';
import HeroSection from '../../layout/HeroSection';
import { blogObjOne, blogObjTwo } from './Data';

const Blog = () => {
  return (
    <div>
      <HeroSection
        {...blogObjOne}
        style={{ paddingTop: '160px!important', paddingBottom: '80px' }}
      />
      <Posts />
      <HeroSection {...blogObjTwo} />
    </div>
  );
};

export default Blog;
