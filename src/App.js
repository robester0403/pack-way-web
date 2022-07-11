import { Route, Routes } from "react-router-dom";
import FrontPage from "./pages/FrontPage/FrontPage";
import "./App.css";

document.title = "Pack Way: The smart camping experience";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
    </Routes>
  );
}

export default App;
