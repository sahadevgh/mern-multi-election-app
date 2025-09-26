import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ElectionsPage from "./pages/ElectionsPage";

function App() {
  return (
    <div className="min-h-screen bg-gray-300 dark:bg-gray-900">
   <Header  />  
   <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/elections" element={<ElectionsPage />} />
   </Routes>
    </div>
  );
}

export default App;
