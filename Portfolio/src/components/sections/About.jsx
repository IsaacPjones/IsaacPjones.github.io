import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const skills = [
        "C",
        "C++",
        "SQL",
        "Python",
        "NumPy",
        "Pandas",
    ];

    const Hobbies = [
        "Photography",
        "Mixed Martial Arts",
        "Watching movies",
        "Video Games"
    ];

    return ( <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll> 
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-6xl font-bold mb-8 text-cyan-500 text-center">
                About Me
            </h2>

            <div>
                <img src="src/assets/Isaac.jpeg" alt="A photo of Isaac Jones" className="w-60 h-60 rounded-full mx-auto mb-6 border-4 border-white/10 shadow-lg hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all" />
            </div>
            <div className="rounded-xl  pb-4 pl-8 border-white/10 border transition-all">
                <p className="text-gray-300 mb-6">
                    <br></br>
                    not final text "I'm a student at Simon Fraser University, studying Computer Science and Business. 
                    I enjoy being creative and building things that people can use. In my free time I enjoy
                    photography, watching mixed martial arts, and spending time with friends and family.""
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">   
                    <div className="rounded-xl pl-6 hover:-translate-y-1 transition-all">
                          <h3 className="text-2xl font-bold mb-4">
                            Skills
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {skills.map((tech, key) => (
                                <span key={key} className="bg-[#fld] text-cyan-500 pb-2 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">{tech}</span>
                            ))}

                          </div>

                    </div>

                    <div className="rounded-xl pl-6 hover:-translate-y-1 transition-all">
                          <h3 className="text-2xl font-bold mb-4">
                            Interests
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {Hobbies.map((tech, key) => (
                                <span key={key} className="bg-[#fld] text-cyan-500 py-1 pb-2 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                            ))}

                          </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-2xl font-bold pb-7 mb-4"> Education </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li className="pb-8">
                        <strong className="text-xl"> Douglas College</strong> 
                        <br></br>
                        <h7 className=" "> 2022 - 2023</h7>
                        
                    </li>
                    <li>
                        <strong className="text-xl"> Simon Fraser University </strong> <br></br>2023 - Present
                        
                    </li>
                </ul>

                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-2xl font-bold mb-4"> Work Experience </h3>
                <div className="space-y-4 text-gray-300">
                    <div>
                        <h4 className="text-center text-xl font-bold">
                            Visions Electronics - Warehouse Operations
                        </h4>
                        <p> <br></br>Managed logistics and inventory using digital systems, coordinated shipments, and ensured process accuracy. Gained hands on experience with structured workflows, data tracking, and operational problem solving.</p>

                    </div>
                    
                </div>

                </div>

            </div>
        </div>
        </RevealOnScroll>
    </section>
    );
};
