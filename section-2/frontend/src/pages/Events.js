import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {

  const data = useLoaderData();
  const fetchedEvents = data.events;

  if (data.isError) {
    return <p>{data.message}</p>;
  }

  return (
    <EventsList events={fetchedEvents} />
  );
}

export default EventsPage;

export async function loader() {
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
    
    return response; // response.json() is called automatically by react-router
  }
}