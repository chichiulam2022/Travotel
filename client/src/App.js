import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import RoomCards from "./components/RoomCards/RoomCards";



function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path='/rooms' element={<RoomCards />} />
    </Routes >

  )
}

export default App;
