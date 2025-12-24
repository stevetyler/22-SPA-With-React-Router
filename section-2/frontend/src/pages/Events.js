import { useLoaderData, Await } from 'react-router-dom';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function EventsPage() {
  const {events} = useLoaderData();

  return (
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading events...</p>}>  
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>  
    </Suspense>
  );
}

export default EventsPage;

export async function loadEvents() {
  // const localStorageEvents = localStorage.getItem('events');

  // if (localStorageEvents) {
  //   return { events: JSON.parse(localStorageEvents) };
  // }
  // cannot use useState or useEffect in loader functions

  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return {
    //   isError: true,
    //   message: 'Could not fetch events.'
    // }
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

export async function loader() {
  return {
    events: loadEvents()
  };
}