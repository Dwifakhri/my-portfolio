import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../pages/App";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default index;
