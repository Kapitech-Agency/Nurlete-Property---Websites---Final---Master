import React, { useEffect } from 'react';
import { createBrowserRouter, Outlet, useLocation } from 'react-router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages & Home Components
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Philosophy } from './components/Philosophy';
import { Stats } from './components/Stats';
import { Insights } from './components/Insights';
import { Previews } from './components/Previews';
import { Experience } from './components/Experience';

// Pages
import { OurStory } from './pages/OurStory';
import { Portfolios } from './pages/Portfolios';
import { ContactUs } from './pages/ContactUs';
import { ProjectDetail } from './pages/ProjectDetail';
import { InsightsPage } from './pages/InsightsPage';
import ArticleDetail from './pages/ArticleDetail';
import UnitDetail from './pages/UnitDetail';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function Layout() {
  return (
    <div className="min-h-screen bg-[#F5F4F0] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-white smooth-scroll relative overflow-hidden font-['Inter']">
      <ScrollToTop />
      
      {/* Global Ambient Background & Topographical Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-black/[0.02] blur-[150px] opacity-80" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-black/[0.03] blur-[150px] opacity-80" />
        <div className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] rounded-full bg-black/[0.02] blur-[120px] opacity-60" />
        
        {/* Subtle Architecture Grid overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <Navbar />
      
      <main className="relative z-10 flex flex-col">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Experience />
      <Previews />
      <Philosophy />
      <Stats />
      <Insights />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "story", Component: OurStory },
      { path: "portfolios", Component: Portfolios },
      { path: "project/:id", Component: ProjectDetail },
      { path: "project/:id/unit/:type", Component: UnitDetail },
      { path: "contact", Component: ContactUs },
      { path: "insights", Component: InsightsPage },
      { path: "insights/:id", Component: ArticleDetail },
    ],
  },
]);
