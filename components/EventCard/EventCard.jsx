import classes from "./EventCard.module.scss";

function EventCard({eventDetails}){
    const {id, title, description, location, date, image, isFeatured} = eventDetails;
    return <div className={classes.event_card}>
        <img src={image} alt={`evet_img_${id}`}/>
        <div className={classes.card_detail}>
            <h4>{title}</h4>
            <h6>{description}</h6>
            <h6>{location}</h6>
            <h6>{date}</h6>
        </div>
    </div>
}

export default EventCard;