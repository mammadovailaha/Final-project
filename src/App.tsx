import "./App.css";
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <Header />
     <div className="w-full h-18 lg:h-22"> <Navbar /></div>
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
