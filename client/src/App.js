import React from "react";
/*import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'; */
/*import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; */

//Compontents

import Home from './pages/Home';
import SignUp from './pages/SignUp';
function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar/>
          <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/signup' element={<SignUp />} />
            </Routes>
          </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
/*    <div className="container mx-auto bg-gray-200 rounded-xl">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and tailwindcss in action
      </p>
    </div>
  )
} */

