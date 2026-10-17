import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Components/Navigations/Nav";
import Footer from "./Page/Home/Footer";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("light");
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
