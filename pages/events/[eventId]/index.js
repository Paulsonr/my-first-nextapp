import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../../dummy-data";

function EventDetailPage() {
  const router = useRouter();
  const { eventId } = router.query;
  const [eventDetails, setEventDetails] = useState({});

  useEffect(() => {
    let eventDetailData = getEventById(eventId);
    setEventDetails(eventDetailData);
  }, [router.query]);

  return (
    <div>
      <h3>{`Welcome to ${eventDetails?.title}`}</h3>
      <img
        src={`/${eventDetails?.image}`}
        alt="detail_img"
        width="100%"
        height={"400px"}
      />
      <h6>{eventDetails?.description}</h6>
    </div>
  );
}
export default EventDetailPage;
