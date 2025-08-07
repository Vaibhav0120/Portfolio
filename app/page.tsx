import HeroSection from "../components/hero-section"
import AboutSection from "../components/about-section"
import ProjectsSection from "../components/projects-section"
import ContactSection from "../components/contact-section"
import Footer from "../components/footer"
import ThemeToggle from "../components/theme-toggle"
import ScrollIndicator from "../components/scroll-indicator"

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <ScrollIndicator />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
