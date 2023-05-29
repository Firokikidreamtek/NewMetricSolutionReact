// import React, { useEffect, useState } from "react";
import {
  Home,
  NotFound
} from "../Pages";
import { Routes, Route } from "react-router-dom";
// import { RootState } from "../Storage/Redux/store";

function App() {
  


  return (
    <div>
        <Routes>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
    </div>
  );
}

export default App;
