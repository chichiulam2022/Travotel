import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Rooms from "./pages/Rooms";
import Review from "./components/Review/Review";
import './App.css'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/toronto" element={<Rooms />} />
        <Route path="/review" element={<Review />} />
      </Routes >
    </div>

  )
}

export default App;
