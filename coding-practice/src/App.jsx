import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LanguagePage from "./pages/LanguagePage";
import ExercisePage from "./pages/ExercisePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/language/:language"
          element={<LanguagePage />}
        />

        <Route
          path="/exercise/:language/:id"
          element={<ExercisePage />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;