
import Banner from "./sections/Banner";
import Services from "../Home/sections/Services"
import StudyAbroad from "./sections/StudyAbroad";
import Bloq from "./sections/Bloq";
import About from "./sections/About";
import VideoGalary from "./sections/VideoGalary";
import Partners from "./sections/Partners";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Banner/>
      <Services/>
      <StudyAbroad/>
      <Bloq/>
      <About/>
      <VideoGalary/>
      <Partners/>
    </div>
  );
}
