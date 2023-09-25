import { Route, Routes } from "react-router-dom";
import "./App.scss";
import SplashScreen from "./components/pages/SplashScreen/SplashScreen";
import Onboarding from "./components/pages/onboarding/Onboarding";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </div>
  );
}

export default App;
