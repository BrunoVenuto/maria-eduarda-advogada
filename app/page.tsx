import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import Importance from "@/components/Importance";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <>
      <AnimatedSection><Header /></AnimatedSection>
      <AnimatedSection><Hero /></AnimatedSection>
      <AnimatedSection><Specialties /></AnimatedSection>
      <AnimatedSection><Importance /></AnimatedSection>
      <AnimatedSection><About /></AnimatedSection>
      <AnimatedSection><Contact /></AnimatedSection>
      <AnimatedSection><FAQ /></AnimatedSection>
      <Footer />
    </>
  );
}
