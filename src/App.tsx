import "./App.css";
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
