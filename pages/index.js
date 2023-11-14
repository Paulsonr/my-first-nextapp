import { useRouter } from "next/router";

function HomePage() {
  const router = useRouter();
  const navToEventsPage = () => {
    router.push("/events");
  };

  return (
    <div style={{ padding: "4px 8px" }}>
      <h2>Home Page</h2>
      <button onClick={navToEventsPage}>Events</button>
    </div>
  );
}
export default HomePage;
