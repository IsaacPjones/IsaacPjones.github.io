import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-8 bg-[linear-gradient(to_bottom,#ff4db8,#fcd34d,#1dd3f8)] bg-clip-text text-transparent text-center">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">
                        Mix Martial Arts Analysis
                    </h3>
                    <p className ="text-gray-400 mb-4">
                        A project that analyzes mixed martial arts fights using Python and machine learning techniques. 
                        It uses data from over 5000 bouts to predict fight outcomes and analyze fighter performance and historical trends.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Python", "NumPy", "Pandas"].map((tech, key) => (
                            <span key={key} className="bg-[#fld] text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                        ))}
                    </div>

                    <div classNAme="flex justify-between items-center">
                        <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors"> View Project </a>
                    </div>


                    

                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">
                        Newton Fractal Visualization
                    </h3>
                    <p className ="text-gray-400 mb-4">
                        A project that visualizes Newton's method for finding roots of complex functions using C++. 
                        It generates stunning fractal images based on the convergence of the method.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["C++"].map((tech, key) => (
                            <span key={key} className="bg-[#fld] text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                        ))}
                    </div>

                    <div classNAme="flex justify-between items-center">
                        <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors"> View Project </a>
                    </div>


                    

                </div>

            </div>
            

        </div>
        </RevealOnScroll>

    </section>
    };