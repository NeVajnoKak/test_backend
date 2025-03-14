import React from "react";
import BusinessProcess from "./components/BusinessProcess";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import FlowChart from "./components/FlowChart";

function App() {
  return (  // Добавляем return!
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flow" element={<FlowChart />} />
      <Route path="/tables" element={<BusinessProcess />} />
    </Routes>
  );
}

export default App;
