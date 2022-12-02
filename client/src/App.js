import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
// import RoomCards from "./components/RoomCards/RoomCards";
import Rooms from "./pages/Rooms";
import NavBar from "./components/Navbar/NavBar.js";
import './App.css'



function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Navbar /> */}
        {/* <Route path="nav" element={<NavBar />} /> */}
        <Route index element={<Homepage />} />
        <Route path="/room" element={<Rooms />} />
      </Routes >
    </div>

  )
}

export default App;
