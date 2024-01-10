import { useLocation } from "react-router-dom"


const Play = () => {
  const info = useLocation()
  return (
    <div
    >
       
      <video 
       style={{
        maxHeight:"20%",
        objectFit:"contain"
     }}
      src={info.state} 
      autoPlay></video>

    </div>
  )
}

export default Play
