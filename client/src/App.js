import FrontPage from "./components/FrontPage/FrontPage";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import RoomSlider from "./components/Slider/RoomSlider";
import NavBar from "./components/Navbar/NavBar";
import RoomCards from "./components/RoomCards/RoomCards";

function App() {
  return (
    <Routes>
      <Route index element={<FrontPage />} />
      <Route path="home" element={<Homepage />} />
      <Route path="/slider" element={<RoomSlider />} />
      <Route path="/navbar" element={<NavBar />} />
      <Route path="/roomCard" element={<RoomCards />} />
    </Routes >

  )
}

export default App;
