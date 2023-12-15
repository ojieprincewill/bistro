import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/Homepage/homepage.component";
import RecipePage from "./pages/RecipePage/recipepage.component";
import ServicesPage from "./pages/ServicesPage/servicespage.component";
import AboutPage from "./pages/Aboutpage/aboutpage.component";
import BlogPage from "./pages/Blogpage/blog-page.component";
import BlogDetailsPage from "./pages/Blogdetailspage/blog-details-page.component";
import ContactPage from "./pages/Contactpage/contact-page.component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/recipes" element={<RecipePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:blogId" element={<BlogDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
