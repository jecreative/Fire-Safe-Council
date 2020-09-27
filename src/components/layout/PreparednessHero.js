import React, { Fragment } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './PreparednessHero.css';

function PreparednessHeroSection({
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
}) {
  return (
    <Fragment>
      <div
        className={lightBg ? 'prep__hero-section' : 'prep__hero-section darkBg'}
      >
        <div className="container">
          <div
            className="row prep__hero-row"
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
            }}
          >
            <div className="col">
              <div className="prep__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'prep__hero-subtitle'
                      : 'prep__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
              </div>
            </div>
            <div className="col">
              <div className="prep__hero-img-wrapper">
                <img src={img} alt={alt} className="prep__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default PreparednessHeroSection;
