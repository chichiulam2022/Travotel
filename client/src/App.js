import FrontPage from "./components/FrontPage/FrontPage";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import RoomSlider from "./components/Slider/RoomSlider";
import NavBar from "./components/Navbar/NavBar";


function App() {
  return (
    <Routes>
      <Route index element={<FrontPage />} />
      <Route path="home" element={<Homepage />} />
      <Route path="/slider" element={<RoomSlider />} />
      <Route path="/navbar" element={<NavBar />} />
    </Routes >
  )
}

export default App;
