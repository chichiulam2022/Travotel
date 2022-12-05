import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Rooms from "./pages/Rooms";
import Review from "./components/Review/Review";
import LoginPage from './pages/LoginPage/LoginPage'
import SignupPage from './pages/SignupPage/SignupPage'
import './App.css'

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
        <Route index element={<Homepage />} />
        <Route path="/toronto" element={<Rooms />} />
        <Route path="/review" element={<Review />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes >
    </ApolloProvider>

  )
}

export default App;
