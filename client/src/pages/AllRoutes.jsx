import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./Register/Register";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Menu from "./Menu/Menu";
import SingleItem from "../pages/Menu/SingleItem";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import Cart from "./Cart/Cart";
import FindKFC from "./FindAKFC/FindKFC";
import Carees from "./Careers/Carees";
import About from "./About/About";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/product/:id" element={<SingleItem />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/find" element={<FindKFC />}></Route>
        <Route path="/careers" element={<Carees />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
};

export default AllRoutes;
