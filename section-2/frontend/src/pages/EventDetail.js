import EventItem from "../components/EventItem";  
import { useRouteLoaderData } from "react-router-dom";

function EventDetailPage() {
  const data = useRouteLoaderData('event-detail');

  return (
    <>  
      <EventItem event={data.event} />
    </>
  );
}

export default EventDetailPage; 

export async function loader({ request, params }) {
    // can't use useParams hook here, but can use ID
    const id = params.eventId; 

    const response = await fetch("http://localhost:8080/events/" + id);

    if(!response.ok) {
      throw new Error({message: 'Could not fetch details'})
    } else {
      return response;
    }
}
  