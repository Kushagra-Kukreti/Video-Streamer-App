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

        }} src={thumbnailUrl} className="postion-relative card-img-top"/>
         <span className="position-absolute top-50 end-0 me-2 badge rounded bg-dark">
        {duration}
        </span>
        </NavLink>
       
        <div className="card-body bg-dark rounded-bottom p-2">
          <h5 className="card-title text-white text-sm">{title}</h5>
          <p className="card-text text-secondary">
             {views} . {author}
          </p>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
