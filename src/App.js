import { Suspense } from "react";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



function App() {
  return (
    <Suspense fallback={null}>
      <div>
        <Navbar />

        <AboutUs />

        <Footer />
      </div>
    </Suspense>

  );
}

export default App;
