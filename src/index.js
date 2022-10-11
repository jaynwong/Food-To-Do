import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useAuth } from "./auth";

import './index.css';

import Layout from './pages/layout.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/login.jsx';
import Signup from "./pages/signup.jsx";
import Dashboard from "./pages/dashboard.jsx";
import AddItemPage from './pages/AddItemPage';
import RemoveItemPage from './pages/RemoveItemPage';


function RequireAuth({ children }) {
  const authed = useAuth();
  console.log("authed = " + authed);
  return authed === true ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<LandingPage />} />
          <Route path="landingpage" element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="additem"
            element={
              <RequireAuth>
                <AddItemPage />
              </RequireAuth>
            }
          />
          <Route
            path="removeitem"
            element={
              <RequireAuth>
                <RemoveItemPage />
              </RequireAuth>
            }
          />

          {/* for a 404 page
          <Route path="*" element={<NoPage />} />
          */}

        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

