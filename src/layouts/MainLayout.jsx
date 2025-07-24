import { Outlet } from "react-router";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Gap from "../components/Gap.jsx";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6">
        <Gap />
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}