import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

function NotFound() {
  return (
    <>
      <NavBar />
      <Hero first="404" second="not found" />
      <div className="error">
        Error
      </div>
      <Footer />
    </>
  );
}

export default NotFound;