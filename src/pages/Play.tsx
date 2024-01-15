import { useLocation } from "react-router-dom"
import { data } from "../utils/api";
import  { VideoCardProp } from "../components/VideoCard";
import SuggestionCard from "../components/SuggestionCard";


const Play = () => {
  const info = useLocation()
  return (
    <>
    <div 
    style={
      {
        height:"80vh", 
        backgroundColor:"black",
        display:"flex",
        alignItems:"center",
        alignContent:"center",
        textAlign:"center"

      }
          
          }>
       
      <video 
      controls
       style={{
        height:"100%",
        margin:"auto"
     }}
      
     
      src={info.state} 
      ></video>

    </div>
    <div 
    style={{
      display:"flex",
      overflow:"scroll",
      gap:"1rem",
      padding:"0.75rem",
      scrollbarWidth:"none",
      backgroundColor:"black"
    }}
    >
      {data.map((currItem: VideoCardProp) => {
            return (
              <SuggestionCard
              description={currItem.description}
              videoUrl={currItem.videoUrl}
                thumbnailUrl={currItem.thumbnailUrl}
                duration={currItem.duration}
                title={currItem.title}
                author={currItem.author}
                views={currItem.author}
              />
            );
          })}
    </div>
    </>
  )
}

export default Play
