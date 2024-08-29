import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/nav/NavBar";
import AboutPage from "./pages/AboutPage";
import RouteNotFound from "./pages/RouteNotFound";
import VocationPage from "./pages/VocationPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/test-vocation" element={<VocationPage />} />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </>
  );
}

export default App;
