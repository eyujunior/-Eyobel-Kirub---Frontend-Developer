import { Route, Routes, useLocation } from "react-router-dom";
import DetailModal from "./components/utils/DetailModal";
import Home from "./pages/Home";
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
    </div>
  );
}

export default App;
