'use client'
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import HeroSection from "@/Components/HeroSection";
import Services from "@/Components/Services";
import TeamSection from "@/Components/TeamSection";
import 'leaflet/dist/leaflet.css';


export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <Services/>
    <TeamSection/>
    <Contact/>
    <Footer/>
    </>
  );
}
