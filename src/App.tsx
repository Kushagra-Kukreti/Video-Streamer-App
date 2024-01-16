import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Webseries from "./pages/Webseries"
import Video from "./pages/Video"
import Play from "./pages/Play"
import BeforeAuthentication from "./pages/BeforeAuthentication"
import { useAuth0 } from "@auth0/auth0-react"
function App() {
 const {isAuthenticated} = useAuth0()
 if(isAuthenticated)
 localStorage.setItem("auth", "true");
  return (
    <>
    {!(localStorage.getItem('auth'))?<BeforeAuthentication/>:
    <>
    <Header/>
    <Routes>
    <Route index element={<Home />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="/video" element={<Video />} />
    <Route path="/play" element={<Play/>} />
    <Route path="/webseries" element={<Webseries />} />
    </Routes>
    </>
    }
    

    
    </>
  )
}

export default App
