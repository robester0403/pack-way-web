import { Route, Routes } from "react-router-dom";
import FrontPage from "./pages/FrontPage/FrontPage";
import NewTrip from "./pages/NewTrip";
import "./App.css";

document.title = "Pack Way: The smart camping experience";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/newtrip" element={<NewTrip />} />
    </Routes>
  );
}

export default App;
