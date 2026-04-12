import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import Customers from "./pages/customers";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </>
  );
}

export default App;
