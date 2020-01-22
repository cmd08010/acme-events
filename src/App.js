import React, { useState } from "react"
import EventList from "./Components/EventList"
import CreateEvent from "./Components/CreateEvent"
import "./App.css"
import "bootstrap/dist/css/bootstrap.css"
import moment from "moment"

const today = moment()

const events = [
  // { format events like this:
  //   title: "text",
  //   date: "test date",
  //   content: "test cont"
  //   pastDate: "not pastdate"
  // }
]

function App() {
  let [eventList, setEventList] = useState(events)

  return (
    <div>
      <h1 className="banner">All My Events</h1>

      <div className="App">
        <CreateEvent
          eventList={eventList}
          setEventList={setEventList}
          today={today}
        />
        <EventList
          eventList={eventList}
          setEventList={setEventList}
          today={today}
        />
      </div>
    </div>
  )
}

export default App
