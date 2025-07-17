import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import AboutSection from '../components/AboutSection'
import TrainersSection from '../components/TrainersSection'
import MembershipSection from '../components/MembershipSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <main className="bg-black text-white font-inter">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TrainersSection />
      <MembershipSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}