import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Read from "./pages/Read";
import Create from "./pages/Create";
import Update from "./pages/Update";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Read />} />
          <Route path="create" element={<Create />} />
          <Route path="update/:id" element={<Update />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
