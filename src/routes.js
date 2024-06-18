import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import PedidoNamoro from "./pages/PedidoNamoro";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PedidoNamoro />} exact />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
