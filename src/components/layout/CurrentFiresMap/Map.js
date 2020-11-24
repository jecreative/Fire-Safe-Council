import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import styled from 'styled-components'
import { Button } from '../Button/Button'

//* Styles

const Map = ({ eventData, center, zoom }) => {
  //* State
  const [locationInfo, setLocationInfo] = useState(null)
  const [locationInfoBox, setLocationInfoBox] = useState(false)

  //* Marker
  const markers =
    eventData.length !== 0 &&
    eventData.map((ev) => {
      if (ev.categories[0].id === 8) {
        return (
          <LocationMarker
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            key={ev.id}
            onClick={() => {
              setLocationInfo({ date: ev.geometries[0].date, title: ev.title })
              setLocationInfoBox(true)
            }}
          />
        )
      }
      return null
    })

  return (
    <>
      <MapHeader className='map-header'>
        <h1>Wildfire Tracker (Powered by EONET)</h1>
      </MapHeader>
      <StyledMap>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDPZL1CfsRQV3hWXDJrqH9NG5bVaLA9juM' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {markers}
        </GoogleMapReact>
        {locationInfo && locationInfoBox && (
          <LocationInfoBox
            info={locationInfo}
            setLocationInfoBox={setLocationInfoBox}
          />
        )}
      </StyledMap>
      <Disclaimer>
        <h3>Disclaimer</h3>
        <p>
          Information presented on this website is a representation of existing
          wildfire situations, based on the information readily available from
          the <span>NASA Earth Observatory Natural Event Tracker (EONET)</span>.
          We make every effort to provide accurate and complete information,
          however the data is subject to review and change. Please use the
          information on these pages only as a reference. The sites are not
          meant to provide up to the minute evacuation or fire behavior
          information. The{' '}
          <span>Earth Observatory Natural Event Tracker (EONET)</span> is a
          prototype web service with the goal of providing a curated source of
          continuously updated natural event data. For more information on EONET
          please visit the link below.
        </p>
        <Button
          buttonColor='green'
          buttonStyle='btn--primary'
          buttonSize='btn--medium'
        >
          <a
            href='https://eonet.sci.gsfc.nasa.gov/'
            target='_blank'
            rel='noreferrer'
          >
            Visit EONET
          </a>
        </Button>
      </Disclaimer>
    </>
  )
}

Map.defaultProps = {
  center: {
    lat: 32.715736,
    lng: -117.161087,
  },
  zoom: 7,
}

const StyledMap = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`
const MapHeader = styled.header`
  padding: 10px;
  background-color: firebrick;
  color: white;
  z-index: 100;

  h1 {
    font-size: 16px;
    padding: 0;
    margin: 0;
    text-align: center;
  }
`

const Disclaimer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 2rem auto;
  padding-right: 50px;
  padding-left: 50px;
  h3 {
    font-size: 2.2rem;
    font-weight: 400;
    margin: 0.75rem 0rem;
  }
  p {
    line-height: 1.75rem;
  }
  span {
    color: red;
    font-weight: bold;
  }
  a {
    color: white;
  }
`

export default Map
