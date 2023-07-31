import React, { Fragment, useEffect, useState } from 'react'
import {getEventById} from '../../../dummy-data'
import EventSummary from '../../../components/event-detail/event-summary'
import EventLogistics from '../../../components/event-detail/event-logistics'
import EventContent from '../../../components/event-detail/event-content'
import { useRouter } from 'next/router'
import ErrorAlert from '../../../components/events/error-alert'
import Button from '../../../components/ui/button'

const EventDetailPage = () => {

  const router = useRouter();
  const eventId = router.query.id;
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const eventById = getEventById(eventId);
    setEvent(eventById);
  }, [eventId]);

  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p>No events found!</p>
        </ErrorAlert>       
        <div className="center">
          <Button link='/events'>Show all events</Button>
        </div>
      </>
    )
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} adress={event.location} image={event.image}  imageAlt={event.title}/>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}

export default EventDetailPage