import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import About from "./pages/about/About";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";

const App = () => {
  return (
    <div>
      <Home />
      <Contact />
      <Gallery />
      <About />
      <NotFound />
      <Plans />
      <Trainers />
    </div>
  );
};

export default App;
