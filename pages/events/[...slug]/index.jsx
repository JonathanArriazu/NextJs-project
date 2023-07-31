import React, { Fragment } from 'react'
import {getFilteredEvents} from '../../../dummy-data'
import { EventList } from '../../../components/events/event-list'
import { useRouter } from 'next/router'
import ResultsTitle from "../../../components/events/results-title"
import Button from '../../../components/ui/button'
import ErrorAlert from "../../../components/events/error-alert"

const FilteredEventsPage = () => {

  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className='center'>Loading...</p>
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYera = +filteredYear;
  const numMonth = +filteredMonth;

  if(isNaN(numYera) || isNaN(numMonth) || numYera > 2030 || numYera < 2021 || numMonth < 1 || numMonth > 12) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link='/events'>Show all events</Button>
        </div>
      </>
    )
  }

  const filteredEvents = getFilteredEvents({
    year: numYera,
    month: numMonth
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>       
        <div className="center">
          <Button link='/events'>Show all events</Button>
        </div>
      </>
    )
  }

  const date = new Date(numYera, numMonth - 1);

  return (
    <div>
      <ResultsTitle date={date}/>
      <EventList items={filteredEvents}/>
    </div>
  )
}

export default FilteredEventsPage