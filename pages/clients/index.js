import { useRouter } from "next/router";
import Link from "next/link";


function ClientPage(){
    const router =  useRouter();
    console.log("Client home > ", router.pathname, router.query);
    const clients = ['Max', 'Tom', 'Jaz'];
    const navtoHome = () => {
        router.push("/")
    }
    const navToClientProfile = (cli) => {
        router.push({
            pathname: "/clients/[clientName]",
            query: {clientName: cli}
        })
    }
    return <div>
        <button onClick={navtoHome}>Home</button>
        <h1>Client Home Page</h1>
        <ul>
            {clients.map((cli) => <li onClick={() => navToClientProfile(cli)}>{cli}</li>)}
        </ul>
    </div>
}

export default ClientPage;