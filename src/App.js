import "./App.css";
import CSVInterface from "./dashboard/CSVInterface";
import LoginWithLocalStorage from "./Login/LoginWithLocalStorage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginWithLocalStorage />} />
          <Route path="blogs" element={<CSVInterface />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
