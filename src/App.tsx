import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from "./components/layout/Loading";
// import Header from "./components/layout/header";
import Main from "./components/layout/Main";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Locatied from "./components/layout/Location";
import Dashboard from "./components/layout/Dashboard";

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate a network request or other loading operation
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time as needed
  }, []);

  return (
    <Router>
      {/* <Header /> */}
      <div className="min-h-screen bg-[#f3e2e5]  overflow-y-hidden">
        {
          loading ? (
            <Loading />
          ) : (
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/main" element={<Main />} />
              <Route path="/register" element={<Register />} />
              <Route path="/location" element={<Locatied />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          )
        }
      </div>
    </Router>
  );
};

export default App;
