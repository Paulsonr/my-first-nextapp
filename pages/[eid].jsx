import fs from "fs/promises";
import path from "path";

function EventDetailPage (props) {
    const {loadedEvent} = props;
    // if(!loadedEvent){
    //     return <h3>Loading...</h3>
    // }
    return <>
        <h1>{loadedEvent.title}</h1>
        <h5>{loadedEvent.description}</h5>
    </>
}

export async function getStaticProps(context){
    const {params} = context;
    const eventId = params.eid;
    const filePath = path.join(process.cwd(), "data", "dummy-data.json");
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    const eventDetail = data.events.find((node) => node.id === eventId);

    return{
        props: {
            loadedEvent: eventDetail
        }
    }
}

export async function getStaticPaths(){
    return {
        paths: [
            {params: { eid: 'e1'}}
        ],
        fallback: "blocking" // true
    }
}
export default EventDetailPage;