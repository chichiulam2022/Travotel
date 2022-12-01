import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
    </Routes >

  )
}

export default App;
