import FrontPage from "./components/FrontPage/FrontPage";
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
