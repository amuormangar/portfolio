import Navbar from "./components/Navbar"
import {Hero,Skills,About} from "./components/MainContent"
import ProjectsGrid from "./components/Projects"
export default function Page() {
  return (
    <>
      <Navbar />
      <main className="max-w-[90%] mx-auto px-4 md:px-6 lg:px-8 w-[100%]">
        <Hero/>
        <About/>
        <Skills/>
        <ProjectsGrid />
      </main>

      <footer className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} [Your Name]. Built with Next.js + Tailwind.
      </footer>
    </>
  )
}