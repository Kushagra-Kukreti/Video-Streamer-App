import { useAuth0 } from "@auth0/auth0-react";
const BeforeAuthentication = () => {
  const { loginWithRedirect,isAuthenticated } = useAuth0();
  if(isAuthenticated)
  localStorage.setItem('authentication', "true");
  return (
    <>
     <div  style={{
      backgroundColor:"black",
      position:"relative",
      height:"100vh",
      overflow:"hidden",
      width:"100vw",
      objectFit:"cover"}}/>
   
     <button className="btn btn-primary" style={{position:"absolute" ,right:"2rem", top:"0.5rem"}} onClick={() => loginWithRedirect()}>Log In</button>

     <div style={{position:"absolute" ,top:"40%", right:"9%", color:"white"}}><h1><span style={{color:"red"}}>WELCOME TO WATCH YOUR FAVOURITE</span> <span style={{color:"lightblue"}}>MOVIES</span> AND WEBSERIES</h1></div>
      
    </>
  )
}

export default BeforeAuthentication
