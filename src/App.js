import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";
import Services from "./components/Services";

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contacts.scss";
import "./styles/mediaquery.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contacts />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="*" element={<h1>404 Not Found</h1>}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
