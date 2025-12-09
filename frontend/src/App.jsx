import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Prices from "./pages/Prices";
import Tests from "./pages/Tests";
import English from "./pages/English";
import Arabic from "./pages/Arabic";
import Japanese from "./pages/Japanese";
import German from "./pages/German";
import SummerSchoolUSA from "./pages/SummerSchoolUSA";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://backend:5000/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/english" element={<English />} />
        <Route path="/arabic" element={<Arabic />} />
        <Route path="/japanese" element={<Japanese />} />
        <Route path="/german" element={<German />} />
        <Route path="/summer-school-usa" element={<SummerSchoolUSA />} />
      </Routes>
    </Router>
  );
}

export default App;




