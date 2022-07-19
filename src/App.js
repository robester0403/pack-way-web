import { Route, Routes } from "react-router-dom";
import FrontPage from "./pages/FrontPage/FrontPage";
import NewTrip from "./pages/NewTrip";
import Checklist from "./pages/Checklist";
import "./App.css";

document.title = "Pack Way: The smart camping experience";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/newtrip" element={<NewTrip />} />
      <Route path="/checklist" element={<Checklist />} />
    </Routes>
  );
}

export default App;
