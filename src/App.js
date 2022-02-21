import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./App.css";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Home />
            </div>
          }
        />
        <Route
          path="/checkout"
          element={
            <div>
              <Header />
              <Checkout />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
