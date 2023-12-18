import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/Homepage/homepage.component";
import RecipePage from "./pages/RecipePage/recipepage.component";
import ServicesPage from "./pages/ServicesPage/servicespage.component";
import AboutPage from "./pages/Aboutpage/aboutpage.component";
import BlogPage from "./pages/Blogpage/blog-page.component";
import BlogDetailsPage from "./pages/Blogdetailspage/blog-details-page.component";
import ContactPage from "./pages/Contactpage/contact-page.component";
import WithSpinner from "./components/Spinner/with-spinner.component";

function App() {
  const Homepage = WithSpinner(HomePage);
  const Recipepage = WithSpinner(RecipePage);
  const Servicespage = WithSpinner(ServicesPage);
  const Aboutpage = WithSpinner(AboutPage);
  const Blogpage = WithSpinner(BlogPage);
  const Blogdetailspage = WithSpinner(BlogDetailsPage);
  const Contactpage = WithSpinner(ContactPage);

  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/recipes" element={<Recipepage />} />
        <Route path="/services" element={<Servicespage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/blog/:blogId" element={<Blogdetailspage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </>
  );
}

export default App;
