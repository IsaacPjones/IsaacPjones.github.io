import { RevealOnScroll } from "../RevealOnScroll";
import Newton from "../../assets/newton1.png";
import MMA    from "../../assets/plot1.png";
import MMA2   from "../../assets/plot2.png";



export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-6xl font-bold mb-8 bg-cyan-500 bg-clip-text text-transparent text-center">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    
                    

                    <h3 className="text-3xl font-bold mb-4">Mixed Martial Arts Data Analysis</h3>
                    <p className="mb-6 text-gray-300">
                    We analyzed 6,500+ UFC (A mixed martial arts fighting organization) bouts from 2010 to 2024 to measure how fighter attributes (height, reach, age, experience, stance) influence outcomes.
                    After cleaning and standardizing the data (e.g. fuzzy-matching names, merging decision categories), we applied descriptive statistics, one-sample t tests, OLS regression and trained three classifiers (Logistic Regression, Random Forest, K-Nearest Neighbors). 
                    Logistic Regression performed best with ~59% accuracy and the highest AUC. 
                    <h3 className="pt-8"> <strong>Major findings: </strong> decision finishes are increasing, height and reach give small win-rate gains, southpaw stance has an edge, and heavyweights gain a clear advantage when weight differences exceed 30 lbs. </h3>
                    </p>

                    <h4 className="text-2xl font-semibold mb-2">Utilities &amp; Libraries Used</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 pb-6">
                        <li>Data processing: Pandas, NumPy, fuzzywuzzy</li>
                        <li>Visualization: Seaborn, Matplotlib</li>
                        <li>Statistical analysis: statsmodels (OLS regression), SciPy (t tests)</li>
                        <li>Machine learning: scikit-learn’s LogisticRegression, RandomForestClassifier, KNeighborsClassifier</li>
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Python", "NumPy", "Pandas", "Seaborn", "Matplotlib", "fuzzywuzzy"].map((tech, key) => (
                            <span key={key} className="bg-[#fld] text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                        ))}
                    </div>

                    <div classNAme="flex justify-between items-center">
                        <a href="https://github.com/IsaacPjones/MMA-Analysis" className="text-cyan-500 hover:text-cyan-400 transition-colors"> 
                        View Github Repo </a>
                        <div>
                <img src={MMA} alt="A line graph displaying the win rates of the fighter with a reach or height advantage. A winrate is shown for each weight class" 
                className="w-190 h-100 mx-auto pt-4 mb-6 shadow-lg hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all" />
            </div>
            <div>
                <img src={MMA2} alt="A bar graph outlining the win rates of of different weight differences within the heavyweight class" 
                    className="w-190 h-120 mx-auto pt-4 mb-6 shadow-lg hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all" />
            </div>
                    </div>


                    

                </div>


                

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                    <h3 className="text-3xl font-bold mb-4">Newton Fractal Visualization</h3>
                    <p className="mb-6 text-gray-300">
                    This project generates a striking, colorful pattern by applying Newton's root-finding method to every point on a 2D grid.
                         Each pixel represents a point in the complex plane; the code repeatedly adjusts that point towards one of the function's solutions.
                          Once it “locks in” on a solution or after a set number of tries, the pixel is colored according to which solution was found and how many steps it took.
                         The result is saved as a plain-text PPM image that reveals the classic Newton fractal structure.
                         
                    </p>

                    <h3 className="text-2xl font-extrabold mb-2">
                        
                    </h3>
                    <p className ="text-gray-400 mb-4">
                        
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["C++", "CMath"].map((tech, key) => (
                            <span key={key} className="bg-[#fld] text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                        ))}
                    </div>

                    <div classNAme="flex justify-between items-center">
                        <a href="https://github.com/IsaacPjones/Newton-Fractal-Visulization" className="text-cyan-500 hover:text-cyan-400 transition-colors"> 
                        View Github Repo </a>
                    </div>

                    <div>
                <img src={Newton} alt="A PPM image replicating a newton fractal structure, the main colors are yellow, blue and pink" className="w-190 h-180 mx-auto pt-4 mb-6 shadow-lg hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all" />
            </div>


                    

                </div>

            </div>
            

        </div>
        </RevealOnScroll>

    </section>
    };