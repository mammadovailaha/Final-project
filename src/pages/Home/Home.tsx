// import Footer from "../../layout/Footer";
import Header from "../../layout/Header"
import Navbar from "../../layout/Navbar";
import Banner from "./sections/Banner";
import Services from "../Home/sections/Services"
import StudyAbroad from "./sections/StudyAbroad";
import Bloq from "./sections/Bloq";
export default function Home() {
  return (
    <div className="">
      <Header />
      <Navbar/>
      <Banner/>
      <Services/>
      <StudyAbroad/>
      <Bloq/>
      {/* <Footer/> */}
    </div>
  );
}
