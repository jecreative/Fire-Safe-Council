import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import AboutHeroSection from '../AboutPage/AboutHeroSection'
import { MissionHeroObj } from './Data'

const Mission = () => {
  return (
    <Fragment>
      <Helmet>
        <meta
          name='description'
          content='California Fire Safe Council’s mission is to be “California’s leader in community wildfire risk reduction and resiliency!'
        />
        <title>Our Mission - Fire Safe Council</title>
      </Helmet>
      <AboutHeroSection {...MissionHeroObj} />

      <div className='about__mission-text-wrapper'>
        <p className='about__mission-paragraph'>
          The California Fire Safe Council (CFSC), a California non-profit
          corporation, was first formed as a project of the California
          Department of Forestry and Fire Protection (CAL FIRE) in 1993.
          <br /> <br />
          It brought together community leaders, governmental agencies, and
          corporations to provide education to the residents of California on
          the dangers of wildfires and how they could be prevented. Our early
          days were spent creating the Fire Safe Council concept and early
          materials on hazardous fuel reduction and defensible space while
          working with our local, agency, and corporate partners to build a
          thriving statewide network of interested individuals and
          organizations.
          <br /> <br />
          Early on, it was clear that the previous way of distributing federal
          dollars to wildfire-prone areas to fund fire prevention activities was
          too cumbersome for both the granting agencies and the applicants.
          Along with that recognition, the federal government passed the
          National Fire Plan and the Healthy Forest Restoration Act, so more
          money was available to local communities and jurisdictions for
          community-led projects to reduce hazardous fuels and prepare for
          wildfire. At the same time, the California Fire Safe Council (CFSC)
          became a non-profit corporation and received its non-profit, 501c3
          tax-exempt status in 2002
          <br /> <br />
          Under the leadership of the California Fire Alliance—an effective
          networking group of federal, state, and local fire agencies—it was
          decided that CFSC should facilitate a more efficient way to get
          federal fire prevention and mitigation funding to local communities.
          We were tasked with developing and maintaining an online, “one-stop
          shop,” Grant Clearinghouse mainly for the four primary federal
          agencies: the US Department of Agriculture, Forest Service and the
          Department of the Interior agencies the Bureau of Land Management,
          National Park Service, and Fish & Wildlife Service.
          <br /> <br />
          These agencies now provide large master grants to CFSC to conduct,
          select, manage and monitor subgrants to local community groups such as
          Fire Safe Councils, homeowner associations, local government, fire
          departments, and other entities working on wildfire prevention
          activities such as defensible space, community fire planning, and
          education. We also provide technical assistance to our grantees to
          ensure successful granting and projects.
          <br /> <br />
          Since that first grant cycle in 2004, California Fire Safe Council has
          provided over 900 grants totaling over $100 million to organizations
          and agencies located throughout California.
          <br /> <br />
          In addition to our primary Grants Clearinghouse program, CFSC over the
          years has provided varying levels of technical assistance and support
          to Fire Safe Councils and other community wildfire preparedness
          groups—we refer to them as community wildfire practitioners—assisting
          them in both education in wildfire issues and in organizational issues
          related to capacity building and sustainability.
          <br /> <br />
          At the same time, CFSC has forged a strong network of partnerships
          with local, regional, state, and national organizations and works
          continuously to build and maintain effective linkages with government
          officials in California and Washington DC.
          <br /> <br />
          With the threat of wildfire looming ever-larger for many California
          communities, CFSC is redoubling its efforts to build strong local and
          countywide Fire Safe Councils, and lead efforts in community wildfire
          preparedness, education, and mitigation to build fire-adapted
          communities throughout California.
        </p>
      </div>
    </Fragment>
  )
}

export default Mission
