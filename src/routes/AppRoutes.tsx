import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import PracticeArea from "../pages/PracticeArea";
import SectorsPage from "../pages/SectorsPage";
import OurTeam from "../pages/OurTeam";
import InsightsPage from "../pages/InsightsPage";
import ContactPage from "../pages/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ScrollToTop from "../components/ScrollToTop";

export default function AppRoutes() {
  return (
    <>
    <ScrollToTop />
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
      <Route path="/industries"
        element={
          <MainLayout>
            <SectorsPage />
          </MainLayout>
        }
      />
      <Route path="/team"
        element={
          <MainLayout>
            <OurTeam />
          </MainLayout>
        }
      />
      <Route path="/blogs"
        element={
          <MainLayout>
            <InsightsPage  />
          </MainLayout>
        }
      />
      <Route path="/contact"
        element={
          <MainLayout>
            <ContactPage />
          </MainLayout>
        }
      />
      <Route path="/privacy"
        element={
          <MainLayout>
            <PrivacyPolicy />
          </MainLayout>
        }
      />
    </Routes>
    </>
  );
}