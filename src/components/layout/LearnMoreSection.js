import React, { Fragment } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './LearnMoreSection.css';

function LearnMoreSection({
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
        className={
          lightBg ? 'learn__hero-section' : 'learn__hero-section darkBg'
        }
      >
        <div className="container">
          <div
            className="row learn__hero-row"
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
            }}
          >
            <div className="col">
              <div className="learn__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'learn__hero-subtitle'
                      : 'learn__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <Link to="/about">
                  <Button buttonSize="btn--wide" buttonColor="green">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="learn__hero-img-wrapper">
                <img src={img} alt={alt} className="learn__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default LearnMoreSection;
