import { Link } from "react-router-dom";  


function EventsPage() {
  const EVENTS = [
    { id: 'e1', title: 'Event 1' },
    { id: 'e2', title: 'Event 2' },
    { id: 'e3', title: 'Event 3' }
  ]

  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default EventsPage;