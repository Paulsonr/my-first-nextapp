import { useRouter } from "next/router";
import Link from "next/link";


function ClientPage(){
    const router =  useRouter();
    console.log("Client home > ", router.pathname, router.query);
    return <div>
        <h1>Client Home Page</h1>
        <ul>
            <li><Link href='/clients/Max'>Max CLI1</Link></li>
            <li><Link href='/clients/Tom'>Tom CLI2</Link></li>
            <li><Link href='/clients/Jaz'>Jaz CLI3</Link></li>
        </ul>
    </div>
}

export default ClientPage;