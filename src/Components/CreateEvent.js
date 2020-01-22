import React from "react"
import moment from "moment"

export default function CreateEvent({ eventList, setEventList, today }) {
  const addNewEvent = e => {
    e.preventDefault()
    let date = document.querySelector("#date")
    let title = document.querySelector("#title")
    let content = document.querySelector("#content")

    let newEvent = {}
    let formattedDate = moment(today).format("MM/DD/YYYY")
    if (title.value === "") {
      alert("Please input a title")
      return null
    }
    if (date.value === "") {
      alert(
        "Please input a date, if you do not then today's current date will be used"
      )
      newEvent = {
        title: title.value,
        date: formattedDate,
        content: content.value,
        pastDate: "past-date"
      }
    } else {
      formattedDate = moment(date.value).format("MM/DD/YY")
      newEvent = {
        title: title.value,
        date: formattedDate,
        content: content.value,
        pastDate: "not-past-date"
      }
    }

    setEventList([...eventList, newEvent])
    //console.log(eventList)
  }

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"> Create a new Event!</h5>
          <input type="text" id="title" name="title"></input>
          <input type="text" id="date" name="date"></input>
          <input type="text" id="content" name="content"></input>
          <button className="btn btn-primary" onClick={addNewEvent}>
            Add Event
          </button>
        </div>
      </div>
    </div>
  )
}
