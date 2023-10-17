import { useRouter } from "next/router";
import Link from "next/link";

function ClientProfilePage(){
    const router =  useRouter();
    console.log("Client Profile > ", router.pathname, router.query);
    const navtoHome = () => {
        router.push("/")
    }
    return <div>
        <button onClick={navtoHome}>Home</button>
        <h1>Client Profile Page : {router.query.clientName}</h1>
        <ul>
            <li><Link href={`/clients/${router.query.clientName}/Project1`}>Project1</Link></li>
            <li><Link href={`/clients/${router.query.clientName}/Project2`}>Project2</Link></li>
            <li><Link href={`/clients/${router.query.clientName}/Project3`}>Project3</Link></li>
        </ul>
    </div>
}

export default ClientProfilePage;