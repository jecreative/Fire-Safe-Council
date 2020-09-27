import React, { Fragment } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './NewsSection.css';

function NewsSection({
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
        className={lightBg ? 'news__hero-section' : 'news__hero-section darkBg'}
      >
        <div className="container">
          <div
            className="row news__hero-row"
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
            }}
          >
            <div className="col">
              <div className="news__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'news__hero-subtitle'
                      : 'news__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <Link to="/blog">
                  <Button buttonSize="btn--wide" buttonColor="green">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="news__hero-img-wrapper">
                <img src={img} alt={alt} className="news__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default NewsSection;
