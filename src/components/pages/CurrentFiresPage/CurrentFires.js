import React, { useEffect } from 'react'
import Map from '../../layout/CurrentFiresMap/Map'
import Spinner from '../../layout/Spinner/Spinner'
// import Header from './components/Header'

//* Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchWildFireEvents } from '../../../redux/actions/eventActions'

const FireEvents = () => {
  const dispatch = useDispatch()
  const { events, loading } = useSelector((state) => state.events)

  useEffect(() => {
    async function fetchWildFireData() {
      await dispatch(fetchWildFireEvents())
    }
    if (events.length === 0) {
      fetchWildFireData()
    }
  }, [dispatch, events])

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        events.length !== 0 && <Map eventData={events} />
      )}
    </div>
  )
}

export default FireEvents
