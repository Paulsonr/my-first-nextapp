import { useState, useEffect } from "react";
import { getAllEvents, getFeaturedEvents } from "../../dummy-data";
import EventCard from "@/components/EventCard/eventCard";
import classes from "./events.module.scss";
import { useRouter } from "next/router";

function AllEventsPage() {
  const [events, setEvents] = useState([]);
  const router = useRouter();
  const navToEventDetailPage = (eventId) => {
    router.push({
      pathname: "/events/[eventId]",
      query: { eventId: eventId },
    });
  };
  const handleFeaturedEvent = (checked) => {
    let data = [];
    if (checked) data = getFeaturedEvents();
    else data = getAllEvents();
    setEvents(data);
  };
  useEffect(() => {
    let data = getAllEvents();
    setEvents(data);
  }, []);

  return (
    <div className={classes.events_page}>
      <h1>Events</h1>
      <span className={classes.featured_sec}>
        <label>
          <b>Featured Event</b>
        </label>
        <input
          type="checkbox"
          onChange={(e) => handleFeaturedEvent(e.target.checked)}
        />
      </span>
      <div className={classes.events_list}>
        {events.length &&
          events.map((event) => {
            return (
              <div onClick={() => navToEventDetailPage(event.id)}>
                <EventCard key={event.id} eventDetails={event} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default AllEventsPage;
