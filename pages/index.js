import { useRouter } from "next/router";
import { getAllEvents } from "@/dummy-data";
import fs from "fs/promises";
import path from "path";
import Link from "next/link";

function HomePage(props) {
  const router = useRouter();
  const { events } = props;
  const navToEventsPage = () => {
    router.push("/events");
  };

  return (
    <div style={{ padding: "4px 8px" }}>
      <h2>Home Page</h2>
      <button onClick={navToEventsPage}>Events</button>

      <h3>Side concepts</h3>
      <ul>
        {events?.map((event) => (
          <li key={event.id}>
            <Link href={`/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: true,
    };
  }

  return {
    props: {
      events: data.events,
    },
  };
}
export default HomePage;
