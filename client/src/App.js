import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";

import RoomSlider from "./components/Slider/HotelSlider";
import NavBar from "./components/Navbar/NavBar";
import RoomCards from "./components/RoomCards/RoomCards";
import FrontPage from "./components/FrontPage/FrontPage";
import AboutUs from "./components/AboutUs/AboutUs";


function App() {
  return (
    <Routes>
      <Route index element={<FrontPage />} />
      <Route path="home" element={<Homepage />} />
      <Route path="/slider" element={<RoomSlider />} />
      <Route path="/navbar" element={<NavBar />} />
      <Route path="/roomCard" element={<RoomCards />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes >

  )
}

export default App;
