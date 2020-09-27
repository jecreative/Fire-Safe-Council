import React, { Fragment } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './ResourcesSection.css';

function ResourcesSection({
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
          lightBg ? 'resources__hero-section' : 'resources__hero-section darkBg'
        }
      >
        <div className="container">
          <div
            className="row resources__hero-row"
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
            }}
          >
            <div className="col">
              <div className="resources__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'resources__hero-subtitle'
                      : 'resources__hero-subtitle dark'
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
              <div className="resources__hero-img-wrapper">
                <img src={img} alt={alt} className="resources__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ResourcesSection;
