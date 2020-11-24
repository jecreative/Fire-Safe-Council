import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { mapsData } from './mapsData'
import { Icon } from '@iconify/react'
import arrowLeftCircle from '@iconify/icons-mdi/arrow-left-circle'
import arrowRightCircle from '@iconify/icons-mdi/arrow-right-circle'

const Maps = () => {
  const [modal, setModal] = useState()
  const [imageSrc, setImageSrc] = useState(null)

  const handleOpenMapModal = async (e) => {
    document.body.style.overflow = 'hidden'
    await setImageSrc(e.target.src)
  }
  const handleCloseMapModal = (e) => {
    if (e.target.id === 'prev' || e.target.id === 'next') {
      return
    } else {
      document.body.style.overflow = 'auto'
      setModal()
      setImageSrc(null)
    }
  }
  const handlePrevImage = async (e) => {
    await setImageSrc(mapsData()[mapsData().indexOf(imageSrc) - 1])
    if (mapsData().indexOf(imageSrc) === 0) {
      setImageSrc(mapsData()[9])
    }
  }
  const handleNextImage = async () => {
    await setImageSrc(mapsData()[mapsData().indexOf(imageSrc) + 1])
    if (mapsData().indexOf(imageSrc) === 9) {
      setImageSrc(mapsData()[0])
    }
  }

  useEffect(() => {
    imageSrc &&
      setModal(
        <MapsOverlay onClick={handleCloseMapModal}>
          <MapsModal>
            <img src={imageSrc} alt='map' />
            <PrevNextButtons>
              <StyledIcon
                id='prev'
                icon={arrowLeftCircle}
                width='30px'
                onClick={handlePrevImage}
              />
              <StyledIcon
                id='next'
                icon={arrowRightCircle}
                width='30px'
                onClick={handleNextImage}
              />
            </PrevNextButtons>
          </MapsModal>
        </MapsOverlay>
      )
    // eslint-disable-next-line
  }, [setModal, imageSrc])

  return (
    <>
      {modal}
      <MapsSection>
        <MapsHeader>
          <h3>Maps</h3>
        </MapsHeader>
        <MapsSlider>
          {mapsData().map((map, index) => (
            <img src={map} alt='' key={index} onClick={handleOpenMapModal} />
          ))}
        </MapsSlider>
        <p>Scroll right to view all of our fire safety and incident maps --➤</p>
      </MapsSection>
    </>
  )
}

const MapsSection = styled.div`
  min-height: 700px;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 2rem auto;
  padding: 2rem 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 768px) {
    padding: 2rem 30px;
  }
  p {
    font-weight: bold;
    letter-spacing: 0.1rem;
    line-height: 1.5rem;
  }
`
const MapsHeader = styled.div`
  h3 {
    margin-bottom: 16px;
    font-size: 48px;
    line-height: 0;
    font-weight: 600;
    /* color: #f7f8fa; */
    color: #1c2237;
  }
`
const MapsSlider = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow-x: scroll;
  img {
    height: 400px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-right: 1.5rem;
    @media (max-width: 768px) {
      height: 350px;
    }
    &:hover {
      transform: scale(1.05);
    }
  }
`

const MapsOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  /* display: none; */
`
const MapsModal = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 90%;
  margin: 3rem auto;
  /* padding: 2rem; */

  img {
    min-height: 500px;
    max-height: 700px;
    width: 100%;
    object-fit: contain;
    @media (max-width: 768px) {
      min-height: 400px;
      max-height: 400px;
      width: 100%;
      object-fit: cover;
    }
  }
`

const PrevNextButtons = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 10vh;
  z-index: 2000;
  margin-top: 0px;
  @media (min-width: 768px) {
    padding: 0rem 10rem;
  }
  @media (max-width: 1024px) {
    padding: 0rem 5rem;
  }
  @media (max-width: 768px) {
    padding: 0rem 0rem;
    margin-top: 500px;
  }
`

const StyledIcon = styled(Icon)`
  cursor: pointer;
  color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
  z-index: 100;
  margin: 2rem;
  border-radius: 50%;
  path {
    pointer-events: none;
  }
  &:hover {
    transform: scale(1.1);
  }
`

export default Maps
