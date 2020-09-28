import React, { Fragment } from 'react';
import AboutHeroSection from '../AboutPage/AboutHeroSection';
import { WhoWeAreHeroObj } from './Data';

const WhoWeAre = () => {
  return (
    <Fragment>
      <AboutHeroSection {...WhoWeAreHeroObj} />
      <div className="about__mission-text-wrapper">
        <p className="about__mission-paragraph">
          San Diego County has been home to three of the ten largest fires in
          California. The 2003 Cedar Fire is still the largest single fire in
          the nation, and the 2007 wildfires created the largest evacuation in
          our nation’s history. Wildfires not only destroy life and property,
          but also damage our air, watersheds, wildlife habitat, health, and our
          quality of life.
          <br />
          <br />
          Helping San Diego residents prevent, prepare for, and deal with the
          aftermath of these devastating wildfires is the goal of the Fire Safe
          Council of San Diego County. Through our programs and our support of
          community Fire Safe Councils, we are committed to making San Diego
          fire safe.
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
          We are a member of the California Fire Safe Council and act as the
          umbrella organization for the 41 locally-formed community Fire Safe
          Councils within San Diego County. There are more community fire safe
          councils in San Diego County than in any other county in California,
          and we are hoping to grow this network even more.
          <br /> <br />
          All Fire Safe Council members have the following common goals:
          <ul className="goalsList">
            <li>Promote Fire Safety Education</li>
            <li>Encourage Pre-Fire Management</li>
            <li>Attend Meetings</li>
            <li>Participate in Fire Safe Council Programs and Activities</li>
          </ul>
        </p>
      </div>
    </Fragment>
  );
};

export default WhoWeAre;
