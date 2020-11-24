import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

const LocationInfoBox = ({ info, setLocationInfoBox }) => {
  const formattedDate = moment(info.date).format('MMMM Do YYYY')

  const handleClick = () => {
    setLocationInfoBox(false)
  }
  return (
    <>
      <LocationInfo>
        <HideLocationInfoBtn onClick={handleClick}>X</HideLocationInfoBtn>
        <h2>Wildfire Info</h2>
        <hr />
        <ul>
          <li>
            Location: <strong>{info.title.split('Wildfire - ')}</strong>
          </li>
          <li>
            Date: <strong>{formattedDate}</strong>
          </li>
        </ul>
      </LocationInfo>
    </>
  )
}

const LocationInfo = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  width: 400px;
  min-height: 200px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  font-size: 18px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  hr {
    border: 0.5px solid white;
    margin-bottom: 1rem;
  }
  h2 {
    text-align: left;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    padding: 5px 0px;
  }
`

const HideLocationInfoBtn = styled.button`
  width: 30px;
  height: 30px;
  /* border: 1px solid white; */
  background: white;
  border-radius: 50%;
  color: rgba(0, 0, 0, 0.6);
  position: absolute;
  right: 20px;
  top: 15px;
  cursor: pointer;
  outline: transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`

export default LocationInfoBox
