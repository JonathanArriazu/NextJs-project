import React, { useEffect, useState } from 'react'
import {getEventById, getFeaturedEvents} from '../../../helpers/api-util'
import EventSummary from '../../../components/event-detail/event-summary'
import EventLogistics from '../../../components/event-detail/event-logistics'
import EventContent from '../../../components/event-detail/event-content'
import Head from 'next/head'

const EventDetailPage = (props) => {

  // const router = useRouter();
  // const eventId = router.query.eventId;
  // const [event, setEvent] = useState(null);

  const event = props.selectedEvent;

  /* useEffect(() => {
    const eventById = getEventById(eventId);
    setEvent(eventById);
  }, [eventId]); */

  if (!event) {
    return (
      <div className='center'>
          <p>Loading...</p>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name={event.description} content='Find a lot of great events that allow you to evolve...'/>
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} adress={event.location} image={event.image}  imageAlt={event.title}/>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  )
}

export async function getStaticProps(context) {
  const eventId = context.params.id;
  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event
    },
    revalidate: 30
  }
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map(event => ({ params: { id: event.id } }));

  return {
    paths: paths,
    fallback: 'blocking' // if true or 'blocking' we say to nextJs that there are more pages to be loaded apart from the ones that come from the getFeaturedEvents() function
}

}

export default EventDetailPage