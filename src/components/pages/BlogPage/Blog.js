import React, { useEffect } from 'react'
import Posts from './Posts'
import HeroSection from '../../layout/Hero/HeroSection'
import Search from '../../layout/Search/Search'
import { blogObjOne, blogObjTwo } from './Data'

const Blog = () => {
  useEffect(() => {
    document.title = 'News & Events - Fire Safe Council'
  }, [])
  return (
    <div>
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
