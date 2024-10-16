import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NavBar from "./components/nav/NavBar";
import AboutPage from "./pages/about/AboutPage";
import RouteNotFound from "./pages/RouteNotFound";
import TestVocacionalFormContextProvider from "./provider/TestVocacionalFormContextProvider";
import StepManager from "./pages/vocational-test/StepManager";
import Results from "./pages/vocational-test/Results";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route
          path="test-vocation"
          element={<TestVocacionalFormContextProvider />}
        >
          <Route path="step/:stepId" element={<StepManager />} />
          <Route path="result/:result" element={<Results />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </>
  );
}

export default App;
