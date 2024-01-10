import { NavLink } from "react-router-dom";

export type VideoCardProp = {
    thumbnailUrl:string,
    duration:string,
    title:string,
    author:string,
    views:string
    videoUrl:string
    description:string
}
 


const VideoCard = ({thumbnailUrl,duration,title,author,views,videoUrl,description}:VideoCardProp) => {
  return (
    <>
      <div 
      className="card col-4" 
      style={
        { 
            width: "20rem",
            padding:"0"
        }
        }>
       
       <NavLink to={"/video"} state={{videoUrl ,thumbnailUrl,title,description}}>
        <img style={{

            height:"10rem",
            objectFit:"cover"

        }} src={thumbnailUrl} className="card-img-top"/>
        </NavLink>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
             {duration}{author}{views}
          </p>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
