import React from 'react'
import { getAllEvents } from '../../helpers/api-util'
import { EventList } from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';
import { useRouter } from 'next/router';
import Head from 'next/head';

const AllEventsPage = (props) => {

  //const events = getAllEvents();
  const {events} = props;

  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);

  }

  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta name='description' content='Find a lot of great events that allow you to evolve...'/>
      </Head>
      <EventSearch onSearch={findEventsHandler}/>
      <EventList items={events}/>
    </div>
  )
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events
    },
    revalidate: 60
  }
}

export default AllEventsPage