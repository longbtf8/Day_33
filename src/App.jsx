import { Route, BrowserRouter as Router, Routes } from "react-router";

import Home from "./pages/Home";
import News from "./pages/News";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <Router basename="/Day_33">
      <>
        <Header />
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;
