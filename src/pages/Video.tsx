import { NavLink, useLocation } from "react-router-dom";
import VideoCardsLayout from "../components/VideoCardsLayout";

const Video = () => {

   const location = useLocation();
   console.log("Path is", location.pathname)
   const info = location.state;
  return (

    <>
    <div className="card">
      <div style={{padding:'0'}}>
      <img 
      style={{
        position:"relative"
      }}
       src={info.thumbnailUrl} className="card-img-top"/>
       <NavLink  to={"/play"} state={info.videoUrl}>
      <div
        style={{
            position:"absolute",
            right:"1rem",
            top:"1rem",
            border:"solid  0.25rem",
            color:"white",
            borderRadius:"2rem",
          }
          
        }
       className="btn btn-primary">Watch Now</div>
       </NavLink>
      </div>
      <div 
      className="card-body" 
      style={{
        outline:"none",
        border:"none"
        }}>
        <h5 className="card-title">{info.title}</h5>
        <p className="card-text">
          {info.description}
        </p>
        <p className="card-text">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
    <br />
    <VideoCardsLayout/>
    </>
  );
};

export default Video;
