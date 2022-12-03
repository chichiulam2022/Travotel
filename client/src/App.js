import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Rooms from "./pages/Rooms";
import './App.css'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/toronto" element={<Rooms />} />
      </Routes >
    </div>

  )
}

export default App;
