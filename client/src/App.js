import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";

import RoomSlider from "./components/Slider/HotelSlider";
import NavBar from "./components/Navbar/NavBar";
//import RoomCards from "./components/RoomCards/RoomCards";
import AboutUs from "./components/AboutUs/AboutUs";


function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
    </Routes >

  )
}

export default App;
