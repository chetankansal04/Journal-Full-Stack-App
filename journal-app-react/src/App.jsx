import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <main className="flex flex-col justify-between min-h-screen bg-slate-50 text-zinc-700">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </main>
    // Add other components here as needed
  );
}

export default App;
