import { useLocation } from "react-router-dom"
import VideoCardsLayout from "../components/VideoCardsLayout";


const Play = () => {
  const info = useLocation();

  
  
  return (
    <>
    <div 
    className="container-fluid"
    style={
      {
        backgroundColor:"black",
        display:"flex",
        alignItems:"center",
        alignContent:"center",
        textAlign:"center",
        overflow:"hidden"

      }
      
          
          }>
       
      <video 
      controls
       style={{
        width:"100%",
        margin:"auto",
        objectFit:"cover"
     }}
      
     
      src={info.state} 
      ></video>

    </div>
    <div style={{marginTop:"0.5em"}}
    >
      <VideoCardsLayout/>


    </div>
    
     
    
    </>
  )
}

export default Play
