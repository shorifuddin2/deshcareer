
import { Route, Routes } from "react-router-dom";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import Home from "./Home/Home";
import AboutUs from "./Home/AboutUs";


const App = () => {
  return (
    <div>
        <Header></Header>
        

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;