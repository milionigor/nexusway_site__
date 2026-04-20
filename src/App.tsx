/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import About from "./components/About";
import Services from "./components/Services";
import Transformation from "./components/Transformation";
import VideoTestimonial from "./components/VideoTestimonial";
import Testimonials from "./components/Testimonials";
import Differentials from "./components/Differentials";
import Attendance from "./components/Attendance";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <About />
        <Services />

        {/* 👇 A ÂNCORA DE RESULTADOS ENVOLVENDO A TRANSFORMAÇÃO 👇 */}
        <div id="resultados">
          <Transformation />
        </div>

        {/* 👇 A ÂNCORA DE DEPOIMENTOS ENVOLVENDO OS VÍDEOS E TEXTOS 👇 */}
        <div id="depoimentos">
          <VideoTestimonial />
          <Testimonials />
        </div>

        <Differentials />
        <Attendance />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
