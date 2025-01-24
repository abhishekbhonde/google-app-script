import Form from "./components/Form";
import Login from "./components/Login";
import Register from "./components/Register";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="grid grid-cols-[300px_auto] h-screen">
      <BrowserRouter>
        {/* Sidebar */}
        <div className="border-r border-gray-600">
          <Sidebar />
        </div>

        {/* Form */}
        <div className="bg-black flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
