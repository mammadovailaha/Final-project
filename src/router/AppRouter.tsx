import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Structure from "../pages/About/Structure";
import Brands from "../pages/About/Brands";
import StaffDetail from "../pages/About/StaffDetail";
import BrandPage from "../pages/About/BrandPage";
import Contact from "../pages/Contact/Contact";
import BranchesDetail from "../pages/Contact/BranchesDetail";
import FAQ from "../pages/About/FAQ";
import Publish from "../pages/Publish/Publish";
import PublishBookDetail from "../pages/Publish/PublishBookDetail";
import AboutFilm from "../pages/About/AboutFilm";
import Career from "../pages/Career/Career";
import VacanciesDetail from "../pages/Career/VacanciesDetail";
import CareerFAQ from "../pages/Career/CareerFAQ";
import Apply from "../pages/Auth/Apply";
import BuyTicket from "../pages/Ticket/BuyTicket";
import ExamResult from "../pages/ExamResult/ExamResult";
import StudyAbroad from "../pages/StudyAbroad/StudyAbroad";
// import InterviewResults from "../pages/Career/InterviewResults";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/structure" element={<Structure />} />
      <Route path="/about/brands" element={<Brands />} />
      <Route path="/staffDetail/:id" element={<StaffDetail/>}/>
      <Route path="/brandInfo/:id" element={<BrandPage/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/contact/branches/:id" element={<BranchesDetail/>}/>
      <Route path="/about/faq" element={<FAQ/>}/>
      <Route path="/publications" element={<Publish/>}/>
      <Route path="/publications/:id" element={<PublishBookDetail/>}/>
      <Route path="/about/film" element={<AboutFilm/>}/>
      <Route path="/career" element={<Career/>}/>
      <Route path="/career/vacancies-detail/:id" element={<VacanciesDetail/>}/>
      <Route path="/career/faq" element={<CareerFAQ/>}/>
      <Route path="/apply" element={<Apply/>}/>
      <Route path="/ticket" element={<BuyTicket/>}/>
      <Route path="/exam-results" element={<ExamResult/>}/>
      <Route path="/study-abroad" element={<StudyAbroad/>}/>
      {/* <Route path="/career/interviewResults" element={<InterviewResults/>}/> */}
    </Routes>
  );
}
