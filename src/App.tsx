import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Users from "./pages/Users";

import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main className="py-3">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={<Users />}></Route>
        </Routes>
      </main>
    </div>
  );
}
