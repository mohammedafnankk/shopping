import React from "react";
import MainNavbar from "./Pages/Main Navbar/MainNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import FooterCom from "./Pages/FooterComponet/FooterCom";
import Product from "./Pages/Product/Product";
import { Toaster } from "react-hot-toast";
import MainHome from "./Pages/Home/MainHome";
import About from "./Pages/About/About";
import "./App.css";
import ProtectedRoute from "./ProtectedRoute";
function App() {
  const isLoggedIn = localStorage.getItem('accessToken')
  return (
    <div className="App">
      <Router>
        
        <MainNavbar isLoggedIn={isLoggedIn}/>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<SignUp />} />
          
          <Route element={<ProtectedRoute/>}>
          <Route path="/home" element={<Home />} />
          <Route path="/home/:id" element={<Product />} />
          <Route path="/" element={<MainHome />} />
          <Route path="/about" element={<About/>}/>
          </Route>

          
        </Routes>
        <FooterCom />
      </Router>
    </div>
  );
}

export default App;
