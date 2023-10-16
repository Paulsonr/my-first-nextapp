import { useRouter } from "next/router";
function ClientProjectPage(){
    const router =  useRouter();
    console.log("Client Project > ", router.pathname, router.query  );
    return <div><h1>Client Project Page : {router.query.clientProject}</h1></div>
}

export default ClientProjectPage;