import { Outlet } from "react-router-dom";
import Nav from "./Components/Navigations/Nav"
import Footer from "./Page/Home/Footer";

function App() {
  const html = document.documentElement;
  html.classList.add("light");

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
