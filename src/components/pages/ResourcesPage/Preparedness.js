import React, { Fragment } from 'react'
import './Preparedness.css'

function Preparedness({
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
      <div className='preparedness-container'>
        {/* Home Hardening and Defense */}
        <div className='preparedeness-text-wrapper'>
          <div className='heading2'>{topLine}</div>
          <p className='.preparedeness-paragraph'>
            <span className='top-line'>Firewise Communities:</span> a program of
            the{' '}
            <span className='top-line'>
              <a
                href='http://www.nfpa.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                National Fire Protection Association
              </a>
            </span>
            , and a key component of{' '}
            <span className='top-line'>
              <a
                href='http://www.fireadapted.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Fire Adapted Communities{' '}
              </a>
            </span>
            , Firewise offers information and free resources to help communities
            protect homes and lives against the risks of wildfire.
            <br />
            <br />
            <span className='top-line'>
              <a
                href='http://ucanr.edu/sites/Wildfire/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Homeowner’s Wildfire Mitigation Guide:{' '}
              </a>
            </span>
            Embers are a major reason homes ignite during a wildfire. This
            resource provides guidance on changes you can make to harden your
            home to improve its chances of surviving a wildfire.
            <br />
            <br />
            <span className='top-line'>
              <a
                href='https://disastersafety.org/wildfire/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Insurance Institute for Business and Home Safety (IBHS):{' '}
              </a>
            </span>
            The IBHS website features a number of resources pertaining to
            wildfire, including research, tips for preparing your home,
            checklists, and videos.
            <br />
            <br />
            <span className='top-line'>
              <a
                href='http://www.readyforwildfire.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Ready for Wildfire:{' '}
              </a>
            </span>
            learn simple steps you can take to increase your home’s chance of
            surviving a wildfire by maintaining defensible space plus and
            structural hardening, plus many other resources to help prepare and
            protect your family and home.
            <br />
            <br />
            <span className='top-line'>
              <a
                href='http://www.readysandiego.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Ready San Diego:{' '}
              </a>
            </span>
            Resources to help you plan your response in the event of wildland
            fire, as well as ways to prepare yourself and your home before
            wildfire strikes. Don’t forget to download the San Diego County
            Emergency Smart Phone App to use on the go.
            <br />
            <br />
            <span className='top-line'>
              <a
                href='http://www.sandiego.gov/fire/services/brush/index.shtml'
                target='_blank'
                rel='noopener noreferrer'
              >
                San Diego Fire-Rescue Department:{' '}
              </a>
            </span>
            information about brush management and weed abatement requirements,
            guidance, and policies for City of San Diego residents.
            <br />
            <br />
            <span className='top-line'>
              <a
                href='http://www.sandiegocounty.gov/content/sdc/sdcfa/prevention/defensible-space.html'
                target='_blank'
                rel='noopener noreferrer'
              >
                San Diego County Fire Authority:{' '}
              </a>
            </span>
            information and guidance on brush management requirements for San
            Diego County residents.
          </p>
          <br />
          <br />
          {/* Local Fire Station Information */}
          <div className='heading2'>Find your local fire station</div>
          <p className='preparednessText__hero-subtitle'>
            <span className='top-line'>
              <a
                href='http://calfire.ca.gov/contacts/units?UID=44'
                target='_blank'
                rel='noopener noreferrer'
              >
                CAL FIRE – San Diego Unit Stations:{' '}
              </a>
            </span>
            click on View Stations to see a list of stations in the Southern
            Region service area with contact info for each station.
            <br />
            <br />
            <span className='top-line'>
              <a
                href='https://www.sandiego.gov/fire/about/firestations'
                target='_blank'
                rel='noopener noreferrer'
              >
                San Diego Fire-Rescue:{' '}
              </a>
            </span>
            a list of fire stations within the City of San Diego.
            <br />
            <br />
            <span className='top-line'>
              <a
                href='http://sdcounty.maps.arcgis.com/apps/Viewer/index.html?appid=c6b86e4e53b14aefba7f128f9ad67f5c'
                target='_blank'
                rel='noopener noreferrer'
              >
                San Diego County Fire Authority – Fire Protection Services Map:{' '}
              </a>
            </span>
            shows fire stations across the county and the agency providing fire
            protection services for each part of the county.
            <br />
            <br />
          </p>
          {/* During and after an emergency */}
          <div className='heading2'>During and after an emergency</div>
          <p className='preparednessText__hero-subtitle'>
            <span className='top-line'>
              <a
                href='http://www.211sandiego.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                2-1-1 San Diego:{' '}
              </a>
            </span>
            A free, 24 hour, confidential phone service and searchable online
            database. In addition to information on everything from housing,
            health, veteran services, and much more, they provide vital
            information about disaster preparedness and response. You can even
            call for status updates on wildfires.
            <br />
            <br />
            <span className='top-line'>
              <a
                href='http://calfireinformation.weebly.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                San Diego Fire-Rescue:{' '}
              </a>
            </span>
            Get up to the minute information about all active wildfires in
            California.
            <br />
            <br />
            <span className='top-line'>
              <a
                href='http://www.theredguidetorecovery.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Red Guide to Recovery:{' '}
              </a>
            </span>
            preparedness and recovery tips for disasters including wildfire and
            flooding are available online and in the printed document, both
            available here.
            <br />
            <br />
            <span className='top-line'>
              <a
                href='http://sdcountyemergency.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                San Diego County Emergency:{' '}
              </a>
            </span>
            Up to the minute information about current emergencies. Don’t forget
            to download the San Diego County Emergency Smart Phone App to use on
            the go.
            <br />
            <br />
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default Preparedness
