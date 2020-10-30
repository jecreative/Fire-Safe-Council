import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import AboutHeroSection from '../AboutPage/AboutHeroSection'
import { WhoWeAreHeroObj } from './Data'

const WhoWeAre = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Who We Are - Fire Safe Council</title>
        <meta
          name='description'
          content='The Fire Safe Council of San Diego County was formed in 1997 as a nonprofit corporation (501c3) in the state of California through a collaboration between the Resource Conservation District of Greater San Diego County (RCD), along with local, state, federal, and tribal fire agency partners.'
        />
      </Helmet>
      <AboutHeroSection {...WhoWeAreHeroObj} />
      <div className='about__mission-text-wrapper'>
        <div className='about__mission-paragraph'>
          <p>
            San Diego County has been home to three of the ten largest fires in
            California. The 2003 Cedar Fire is still the largest single fire in
            the nation, and the 2007 wildfires created the largest evacuation in
            our nation’s history. Wildfires not only destroy life and property,
            but also damage our air, watersheds, wildlife habitat, health, and
            our quality of life.
            <br />
            <br />
            Helping San Diego residents prevent, prepare for, and deal with the
            aftermath of these devastating wildfires is the goal of the Fire
            Safe Council of San Diego County. Through our programs and our
            support of community Fire Safe Councils, we are committed to making
            San Diego fire safe.
            <br />
            <br />
            The Fire Safe Council of San Diego County was formed in 1997 as a
            nonprofit corporation (501c3) in the state of California through a
            collaboration between the Resource Conservation District of Greater
            San Diego County (RCD), along with local, state, federal, and tribal
            fire agency partners. The RCD manages the programs and the funds for
            the Fire Safe Council of San Diego County.
            <br />
            <br />
            The University City Fire Safe Council is a member of the California
            Fire Safe Council and the Fire Safe Council of San Diego County. The
            Resource Conservation District oversees the San Diego County Fire
            Safe Councils as the umbrella organization for the nearly 50 local
            Fire Safe Councils. For more information about the FSC of San Diego
            County, visit{' '}
            <a href='http://firesafesdcounty.org/'>
              http://firesafesdcounty.org/
            </a>
            .
            <br /> <br />
            All Fire Safe Council members have the following common goals:
          </p>
          <ul className='goalsList'>
            <li>Promote Fire Safety Education</li>
            <li>Encourage Pre-Fire Management</li>
            <li>Participate in Fire Safe Council Programs and Activities</li>
          </ul>
          <br />

          <p>
            For recent news and posts about the University City Fire Safe
            Council as posted on the University City News site, visit{' '}
            <a href='https://www.universitycitynews.org/category/sdfd/'>
              https://www.universitycitynews.org/category/sdfd/
            </a>
            . For information about the history of the University City Fire Safe
            Council, visit{' '}
            <a href='https://www.universitycitynews.org/fire-safe-council-university-city/'>
              https://www.universitycitynews.org/fire-safe-council-university-city/
            </a>
            .
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default WhoWeAre
