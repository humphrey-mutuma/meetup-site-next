import classes from "./MeetupDetail.module.css";

function MeetupDetail(prop) {
  return (
    <div className={classes.detail}>
      <img
        src={props.img}
        alt={props.title}
        srcset=""
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </div>
  );
}

export default MeetupDetail
