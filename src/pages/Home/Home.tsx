// import Footer from "../../layout/Footer";
import Header from "../../layout/Header"
import Navbar from "../../layout/Navbar";
import Banner from "./sections/Banner";
import Services from "../Home/sections/Services"
export default function Home() {
  return (
    <div>
      <Header />
      <Navbar/>
      <Banner/>
      <Services/>
      {/* <Footer/> */}
    </div>
  );
}
