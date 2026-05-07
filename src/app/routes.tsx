import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Insights from './pages/Insights';
import ArticleDetail from './pages/ArticleDetail';
import AboutUs from './pages/AboutUs';
import Portfolio from './pages/Portfolio';
import NavaTerraDetail from './pages/NavaTerraDetail';
import UnitDetail from './pages/UnitDetail';
import PropertyDetail from './pages/PropertyDetail';
import BookingTour from './pages/BookingTour';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { AutoScrollToTop } from './components/common/AutoScrollToTop';

export function AppRoutes() {
 return (
 <BrowserRouter>
 <AutoScrollToTop />
 <div className="min-h-screen bg-[#F5F4F0] text-[#000000] font-sans overflow-x-hidden flex flex-col">
 <Header />
 <main className="flex-1">
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/properties" element={<Properties />} />
 <Route path="/property/:id" element={<PropertyDetail />} />
 <Route path="/insights" element={<Insights />} />
 <Route path="/insights/:id" element={<ArticleDetail />} />
 <Route path="/about-us" element={<AboutUs />} />
 <Route path="/portfolios" element={<Portfolio />} />
 <Route path="/portfolio" element={<Portfolio />} />
 <Route path="/project/nava-terra" element={<NavaTerraDetail />} />
 <Route path="/portfolio/nava-terra" element={<NavaTerraDetail />} />
 <Route path="/project/nava-terra/unit/:type" element={<UnitDetail />} />
 <Route path="/book-private-tour" element={<BookingTour />} />
 <Route path="/contact" element={<Contact />} />
 <Route path="/privacy-policy" element={<PrivacyPolicy />} />
 <Route path="/terms-of-service" element={<TermsOfService />} />
 </Routes>
 </main>
 <Footer />
 </div>
 </BrowserRouter>
 );
}
