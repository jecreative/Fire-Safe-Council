import React, { Fragment } from 'react';
import { Button } from '../../layout/Button/Button';
import { Link } from 'react-router-dom';
import './AboutHeroSection.css';

function AboutHeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  link,
}) {
  return (
    <Fragment>
      <div
        className={lightBg ? 'about_hero-section' : 'about_hero-section darkBg'}
      >
        <div className="container">
          <div
            className="row about__hero-row"
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
            }}
          >
            <div className="col">
              <div className="about__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'about__hero-subtitle'
                      : 'about__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <Link to={link}>
                  <Button buttonSize="btn--wide" buttonColor="green">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="about__hero-img-wrapper">
                <img src={img} alt={alt} className="about__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AboutHeroSection;
