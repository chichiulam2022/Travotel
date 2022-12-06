import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from '@apollo/client';

import Rooms from "./pages/Rooms";
import Review from "./components/Review/Review";
import LoginPage from './pages/LoginPage/LoginPage'
import SignupPage from './pages/SignupPage/SignupPage'
import AboutUs from "./pages/AboutUsPage/AboutUs";
import './App.css'
// import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
// import PageContent from './PageContent';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/toronto" element={<Rooms />} />
          <Route path="/review" element={<Review />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/about_us" element={<AboutUs />} />
        </Routes >
      </ThemeProvider>
    </ApolloProvider >

  )
}

export default App;
