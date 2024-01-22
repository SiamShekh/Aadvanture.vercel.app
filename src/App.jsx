import { Outlet } from "react-router-dom";
import Nav from "./Components/Navigations/Nav"

function App() {
  const html = document.documentElement;
  html.classList.add("light");

  return (
    <>
      {/* <Nav /> */}
      <Outlet />
    </>
  )
}

export default App
