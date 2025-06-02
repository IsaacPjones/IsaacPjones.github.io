import Navbar from './Navbar'

function App() {
  return (
    <>
      <Navbar />

      <section id="home" className="h-screen bg-white flex items-center justify-center pt-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-800xl font-bold">Welcome to My Site</h1>
        </div>
      </section>

      <section id="about" className="h-screen bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="max-w-xl">
            I'm a student at Simon Fraser University, studying Computer Science and business. I have a passion for software development and enjoy working on projects that challenge my skills and creativity.
          </p>
        </div>
      </section>

      <section id="projects" className="h-screen bg-blue-100 p-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <ul className="list-disc ml-6">
            <li>Project 1</li>
            <li>Project 2</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="h-screen bg-pink-100 p-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>Email: IsaacJones32@Gmail.com</p>
          <p>LinkedIn: https://www.linkedin.com/in/isaac-jones-8a863a29a/</p>
        </div>
      </section>
    </>
  )
}

export default App
