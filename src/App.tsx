import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Webseries from "./pages/Webseries"
import Video from "./pages/Video"
import Play from "./pages/Play"

function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route index element={<Home />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="/video" element={<Video />} />
    <Route path="/play" element={<Play/>} />
    <Route path="/webseries" element={<Webseries/>} />
    </Routes>
    </>
  )
}

export default App
