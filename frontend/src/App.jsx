
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard/Dashboard";
import Assistant from "./pages/Assistant/Assistant";

function App() {
  return (
    <BrowserRouter>

      <MainLayout>

        <Routes>

          <Route path="/" element={<Dashboard />} />

          <Route path="/assistant" element={<Assistant />} />

        </Routes>

      </MainLayout>

    </BrowserRouter>
  );
}

export default App;