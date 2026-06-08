import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import PracticeArea from "../pages/PracticeArea";
import OurTeam from "../pages/OurTeam";
import News from "../pages/News";
import Location from "../pages/Location";
import Contact from "../pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route path="/about"
        element={
          <MainLayout>
            <About />
          </MainLayout>
        }
      />
      <Route path="/practice-areas"
        element={
          <MainLayout>
            <PracticeArea />
          </MainLayout>
        }
      />
      <Route path="/the-asa-team"
        element={
          <MainLayout>
            <OurTeam />
          </MainLayout>
        }
      />
      <Route path="/news"
        element={
          <MainLayout>
            <News />
          </MainLayout>
        }
      />
      <Route path="/location"
        element={
          <MainLayout>
            <Location />
          </MainLayout>
        }
      />
      <Route path="/contact"
        element={
          <MainLayout>
            <Contact />
          </MainLayout>
        }
      />
    </Routes>
  );
}