import { RevealOnScroll } from "../RevealOnScroll"



export const Home = () => {
    return (<section id="Home" className="min-h-screen flex items-center justify-center relative"
    >
        <RevealOnScroll>
        <div className="text-center z-10 px-4"> 
            <h1 className="text-fxl md:text-7xl font-bold mb-6 bg-[linear-gradient(to_bottom,#ff4db8,#fcd34d,#1dd3f8)] bg-clip-text text-transparent leading-left">
                Welcome to my portfolio<span class="block">I'm Isaac Jones</span>
            </h1>

            

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                I'm a student at Simon Fraser University, studying Computer Science and Business. 
                I enojoy being creative and building things that people can use. In my free time I enojoy
                photography, watching mixed martial arts, and spending time with friends and family.
            </p>
            <div className-="flex justify center space-x-4">   
                <a href="#projets" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
                    View Projects
                </a>
                <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                    Contact Me
                </a>
            </div>
        </div>
        </RevealOnScroll>
    </section>
    );
}