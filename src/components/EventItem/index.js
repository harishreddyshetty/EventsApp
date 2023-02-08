// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, getRegistrationStatus} = props
  const {imageUrl, name, location, id} = eventDetails

  const onClickEvent = () => {
    getRegistrationStatus(id)
  }

  return (
    <li className="list-event">
      <button className="btn" onClick={onClickEvent} type="button">
        <img className="event-image" alt="event" src={imageUrl} />
      </button>

      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
