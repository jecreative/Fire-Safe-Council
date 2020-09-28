import React, { Fragment } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './FSCMap.css';

function FSCMap({
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
        className={lightBg ? 'map__hero-section' : 'map__hero-section darkBg'}
      >
        <div className="container">
          <div
            className="row map__hero-row"
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
            }}
          >
            <div className="col">
              <div className="map__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'map__hero-subtitle'
                      : 'map__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
              </div>
            </div>
            <div className="col">
              <div className="map__hero-img-wrapper">
                <iframe
                  title="Fire Safe Councils of San Diego County"
                  src="https://www.google.com/maps/d/embed?mid=1BnIKYtIhWdZ8P1dJ6kMBFPUCTAQ"
                  width="600"
                  height="480"
                ></iframe>
                <p>
                  Click on the map to view local San Diego FSCs and their
                  contact info. Or click here to view them in a list. And click
                  here for a list of all local fire stations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default FSCMap;
