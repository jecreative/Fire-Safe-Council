import React, { Fragment } from 'react';
import { Button } from '../../layout/Button/Button';
import { Link } from 'react-router-dom';
import './MainHeroSection.css';

function MainHeroSection({
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
        className={
          lightBg ? 'mainHero__hero-section' : 'mainHero__hero-section darkBg'
        }
      >
        <div className="container">
          <div
            className="row mainHero__hero-row"
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
            }}
          >
            <div className="col">
              <div className="mainHero__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'mainHero__hero-subtitle'
                      : 'mainHero__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                {link !== '' ? (
                  <Link to={link}>
                    <Button buttonSize="btn--wide" buttonColor="green">
                      {buttonLabel}
                    </Button>
                  </Link>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className="col">
              <div className="mainHero__hero-img-wrapper">
                <img src={img} alt={alt} className="mainHero__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MainHeroSection;
