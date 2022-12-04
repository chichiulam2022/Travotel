import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Rooms from "./pages/Rooms";
import Review from "./components/Review/Review";
import LoginPage from './pages/LoginPage/LoginPage'
import SignupPage from './pages/SignupPage/SignupPage'
import './App.css'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/toronto" element={<Rooms />} />
        <Route path="/review" element={<Review />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes >
    </div>

  )
}

export default App;
