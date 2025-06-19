import { RevealOnScroll } from "../RevealOnScroll"
import coolpic from "../../assets/coolpic.JPG"




export const Home = () => {
    return (<section id="Home" className="min-h-screen flex items-center justify-center relative"
    >
        <RevealOnScroll>
        <div className="text-center z-10 px-4"> 
            <img src={coolpic} alt="A photo I took In Seattle with a good composition, to the left is a post with random sea object tied to it, in the foreground is grassy fields, in the background is the ocean" 
            className="w-200 h-120 rounded-2xl mx-auto mb-6 border-1 border-gray-900 shadow-lg hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all" />

            <h1 className="text-xl md:text-8xl font-bold mb-6 bg-cyan-500 bg-clip-text text-transparent leading-left">
                Welcome!
            </h1>

            <br></br>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                I'm a Computer Science and Business student at Simon Fraser University, driven to build useful, creative, and human centered digital experiences.
            </p>

            
            <div className-="flex justify center space-x-4">   
                <a href="#projects" className="bg-cyan-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
                    View Projects
                </a>
                <a href="#contact" className="border border-cyan-500/50 text-cyan-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                    Contact Me
                </a>
            </div>
        </div>
        </RevealOnScroll>
    </section>
    );
}