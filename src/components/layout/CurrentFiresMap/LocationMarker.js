import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'
import styled from 'styled-components'

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className='location-marker' onClick={onClick}>
      <StyledIcon icon={locationIcon} />
    </div>
  )
}

const StyledIcon = styled(Icon)`
  font-size: 2rem;
  color: red;
  cursor: pointer;
  &:hover {
    color: rgba(255, 0, 0, 0.5);
  }
`

export default LocationMarker
