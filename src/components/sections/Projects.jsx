import { RevealOnScroll } from "../RevealOnScroll";

import Newton from "../../assets/newton1.png";
import MMA from "assets/plot1.png";
import MMA2 from "../assets/plot2.png";



export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-6xl font-bold mb-8 bg-cyan-500 bg-clip-text text-transparent text-center">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-2xl font-extrabold mb-2">
                        Mix Martial Arts Analysis
                    </h3>
                    <p className ="text-gray-400 mb-4">
                        A project that analyzes mixed martial arts fights using Python and machine learning techniques. 
                        It uses data from over 5000 bouts to predict fight outcomes and analyze fighter performance and historical trends.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Python", "NumPy", "Pandas"].map((tech, key) => (
                            <span key={key} className="bg-[#fld] text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                        ))}
                    </div>

                    <div classNAme="flex justify-between items-center">
                        <a href="https://github.com/IsaacPjones/MMA-Analysis" className="text-cyan-500 hover:text-cyan-400 transition-colors"> 
                        View Github Repo </a>
                        <div>
                <img src={MMA} alt="A plot showing the win rate in each weight class for height and reach advatange" className="w-190 h-100 mx-auto pt-4 mb-6 shadow-lg hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all" />
            </div>
            <div>
                <img src={MMA2} alt="A plot showing the win rate of lbs difference in heavyweight" className="w-190 h-120 mx-auto pt-4 mb-6 shadow-lg hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all" />
            </div>
                    </div>


                    

                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-2xl font-extrabold mb-2">
                        Newton Fractal Visualization
                    </h3>
                    <p className ="text-gray-400 mb-4">
                        A project that visualizes Newton's method for finding roots of complex functions using C++. 
                        It generates stunning fractal images based on the convergence of the method.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["C++"].map((tech, key) => (
                            <span key={key} className="bg-[#fld] text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                        ))}
                    </div>

                    <div classNAme="flex justify-between items-center">
                        <a href="https://github.com/IsaacPjones/Newton-Fractal-Visulization" className="text-cyan-500 hover:text-cyan-400 transition-colors"> 
                        View Github Repo </a>
                    </div>

                    <div>
                <img src={Newton} alt="A plot showing the win rate in each weight class for height and reach advatange" className="w-190 h-180 mx-auto pt-4 mb-6 shadow-lg hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all" />
            </div>


                    

                </div>

            </div>
            

        </div>
        </RevealOnScroll>

    </section>
    };