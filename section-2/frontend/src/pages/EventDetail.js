import { Suspense } from "react";
import EventItem from "../components/EventItem";  
import { useRouteLoaderData, redirect, Await } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventDetailPage() {
  const {event, events} = useRouteLoaderData('event-detail');

  return (
    <>  
      <Suspense fallback={<p style={{textAlign: 'center'}}>Loading event...</p>}>   
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>  
      </Suspense>
      <Suspense fallback={<p style={{textAlign: 'center'}}>Loading events...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetailPage; 

export async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

    if(!response.ok) {
      throw new Error({message: 'Could not fetch details'})
    } else {
      const resData = await response.json();
      return resData.event;
    }
}

export async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw new Response(JSON.stringify({ 
        message: 'Could not fetch events.' }
      ), { 
        status: 500 
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}


export async function loader({ request, params }) {
    // can't use useParams hook here, but can use ID
    const id = params.eventId; 

    return {
      event: await loadEvent(id), // waits for event to load before rendering route
      events: loadEvents()
    }
}

export async function action({ request, params }) {
    const id = params.eventId;

    const response = await fetch("http://localhost:8080/events/" + id, {
      method: request.method
    });

    if(!response.ok) {
      throw new Error({message: 'Could not delete event'})
    }

    return redirect('/events');
}
  