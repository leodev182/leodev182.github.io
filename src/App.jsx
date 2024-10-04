import "./App.css";
import { NavbarProvider } from "./contexts/NavbarContext.jsx";
import { Hero, Navbar } from "./components/index.js";

function App() {
  return (
    <>
      <NavbarProvider>
        <Navbar />
        <Hero />
      </NavbarProvider>
    </>
  );
}

export default App;
