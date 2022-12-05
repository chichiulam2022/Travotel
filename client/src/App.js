import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import RoomSlider from "./components/Slider/RoomSlider";
import NavBar from "./components/Navbar/NavBar";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:3005/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
import Rooms from "./pages/Rooms";
import Review from "./components/Review/Review";
import LoginPage from './pages/LoginPage/LoginPage'
import SignupPage from './pages/SignupPage/SignupPage'
import './App.css'



function App() {
  return (
    <ApolloProvider client={client}>
    <Routes>
      <Route index element={<FrontPage />} />
      <Route path="home" element={<Homepage />} />
      <Route path="/slider" element={<RoomSlider />} />
      <Route path="/navbar" element={<NavBar />} />
    </Routes >
    </ApolloProvider>

  )
}

export default App;
