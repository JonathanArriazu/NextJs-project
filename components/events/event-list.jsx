import React from 'react'
import EventItems from './event-items'
import styles from "../../styles/components/events/event-list.module.css"

export const EventList = (props) => {

    const {items} = props

  return (
    <ul>
        {items.map( (event) => (<EventItems key={event.id} id={event.id} title={event.title} location={event.location} date={event.date} image={event.image}></EventItems>))}
    </ul>
  )
}
