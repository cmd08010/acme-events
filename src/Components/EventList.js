import React, { useState } from "react"
import moment from "moment"

export default function EventList({ eventList, setEventList, today }) {
  const orderedDates = () => {
    //Want to order the dates showing the further/future dates first then
    //if dates have passed - make them red background
    console.log(eventList, "before map and sort")
    eventList.map((event, index) => {
      eventList.sort((event, index) => {
        return (
          today.diff(event.date[index], "days") >
          today.diff(event.date[index + 1], "days")
        )
      })

      console.log(eventList)
    })
  }

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <button className="btn btn-primary" onClick={orderedDates}>
            Show in Chronological Order
          </button>
          <h5 className="card-title">
            {" "}
            The Acme Event Site ({eventList.length} Events!)
          </h5>
          {eventList.map((event, index) => {
            return (
              <div key={index} className="card">
                <div className="card-body" id={event.pastDate}>
                  <h5 className="card-title">{event.title}</h5>
                  on {event.date}
                  <p className="card-text">{event.content}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
