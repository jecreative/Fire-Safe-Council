import React from 'react'
import Posts from './Posts'
import HeroSection from '../../layout/Hero/HeroSection'
import Search from '../../layout/Search/Search'
import { blogObjOne, blogObjTwo } from './Data'
import { Helmet } from 'react-helmet'

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>News &amp; Events - Fire Safe Council</title>
        <meta
          name='description'
          content='When it comes to wildfire, no single person alone can protect a community. Stay informed with our up to date News &amp; Events.'
        />
      </Helmet>
      <HeroSection
        {...blogObjOne}
        style={{ paddingTop: '160px!important', paddingBottom: '80px' }}
      />
      <Search />
      <Posts />
      <HeroSection {...blogObjTwo} />
    </div>
  )
}

export default Blog
