import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Signup from './component/Signup';
import Login from './component/Login';
import UserInfo from './component/UserInfo';
import ProductList from './component/ProductList';

const App = () => {
  const [authToken, setAuthToken] = useState('');

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Signup/>} />
          <Route path="/login" element={<Login setAuthToken={setAuthToken} />} />
          <Route path="/products" element={
            <>
              <UserInfo authToken={authToken} />
              <ProductList authToken={authToken} />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
