import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EditNote from "./pages/EditNote";
import CreateNote from "./pages/CreateNote";

import { ContextProvider } from "./context/NoteContext";

export default function App() {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <main className="py-3">
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/new" element={<CreateNote />}></Route>
            <Route path="/edit/:id" element={<EditNote />}></Route>
          </Routes>
        </ContextProvider>
      </main>
    </div>
  );
}
