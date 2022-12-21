import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Property from "./components/pages/property";
import Sidebar from "./components/sidebar";
import "./App.css"
import AddProperty from "./components/add_property/main_page";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Sidebar />
          <Routes>
          <Route path="/" />
            <Route path="/property" element={<Property />} />
          </Routes>
      </BrowserRouter> */}
      <AddProperty />
    </div>
  );
}

export default App;
