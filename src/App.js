import React from "react";
import AccountArea from "./components/AccountArea";
import { Routes, Route } from "react-router-dom";

const Login = () => <h1>Login</h1>;
const Home = () => <h1>Home</h1>;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<AccountArea />} />
    </Routes>
  );
};

export default App;
