import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <section id="home"
      className="text-white h-screen bg-fuchsia-200 text-center fLex">
        <h1 className="m-auto font-serif text-7xl text-pink-400 font-bold">Home</h1>
      </section>

      <section id="about"
      className="text-white h-screen bg-fuchsia-300 text-center fLex">
        <h1 className="m-auto font-serif text-7xl text-pink-500 font-bold">About</h1>
      </section>

      <section id="service"
      className="text-white h-screen bg-fuchsia-400 text-center fLex">
        <h1 className="m-auto font-serif text-7xl text-pink-900 font-bold">Service</h1>
      </section>

      <section id="contact"
      className="text-white h-screen bg-fuchsia-300 text-center fLex">
        <h1 className="m-auto font-serif text-7xl text-pink-700 font-bold">Contact{' '}</h1>
      </section>
      
      <section id="projects"
      className="text-white h-screen bg-fuchsia-400 text-center fLex">
        <h1 className="m-auto font-serif text-7xl text-pink-900 font-bold">projects</h1>
      </section>
    </div>
  )
}
