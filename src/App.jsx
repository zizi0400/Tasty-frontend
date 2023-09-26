import { Route, Routes } from "react-router-dom";
import "./App.scss";
import SplashScreen from "./components/pages/SplashScreen/SplashScreen";
import Onboarding from "./components/pages/onboarding/Onboarding";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
