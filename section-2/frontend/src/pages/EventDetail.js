import { useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();
  const eventId = params.eventId;
  
  return (
    <>
      <h1>Event Detail Page</h1>
      <p>Event {eventId}</p>
    </>
  );
}

export default EventDetailPage; 