import "./styles.css";
import LandingPage from "./LandingPage";
import MainPage from "./Mainpage";
import Profile from "./ProfilePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/MainPage" element={<MainPage />}></Route>
        <Route path="/ProfilePage" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
