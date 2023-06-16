import { Route, Routes, useLocation } from "react-router-dom";
import DetailModal from "./components/utils/DetailModal";
import Home from "./pages/Home";
import Certificate from "./pages/Certificate";
import FingerPrint from "./pages/FingerPrint";
import Profile from "./pages/Profile";
import Joblist from "./pages/Joblist";
function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <div>
      <Routes location={background || location}>
        <Route path="/" element={<Home />}>
          <Route path="capsule" element={<DetailModal />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="capsule" element={<DetailModal />} />
        </Routes>
      )}
      <Routes>
        <Route path="/certificate" element={<Certificate />}></Route>
      </Routes>
      <Routes>
        <Route path="/fingerprint" element={<FingerPrint />}></Route>
      </Routes>
      <Routes>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <Routes>
        <Route path="/job" element={<Joblist />}></Route>
      </Routes>
    </div>
  );
}

export default App;
