import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";

export default function App() {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <main className="py-3">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/new" element={<CreateNote />}></Route>
        </Routes>
      </main>
    </div>
  );
}
