import { RevealOnScroll } from "../RevealOnScroll";
import Newton from "../../assets/newton1.png";
import MMA    from "../../assets/plot1.png";
import MMA2   from "../../assets/plot2.png";
import transit from "../../assets/TransitApp.jpg";
import Connect4 from "../../assets/Connect4.gif";
import algo from "../../assets/algo.png";


export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-6xl font-bold mb-8 bg-cyan-500 bg-clip-text text-transparent text-center">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                    <h3 className="text-3xl font-bold mb-4">Vancouver Transit Tracker</h3>
                    <p className="mb-6 text-gray-300">
                       Vancouver Transit Tracker is a web application built to give Vancouver transit users fast, flexible access to real time bus arrival data without relying on Google services 
                    or rigid trip planning. Instead of forcing users into predefined routes, the app surfaces raw, live data from TransLink, allowing experienced locals to make their own timing
                     decisions and helping international visitors access transit information even in regions where Google services are restricted. Users can interact with an intuitive map to view 
                     bus stops, upcoming arrivals, and service alerts, all optimized for performance through marker clustering and map viewport rendering.
                     </p>
                    <p className="mb-6 text-gray-300">The project was developed by a four person team using an Agile Kanban workflow and deployed with a full CI/CD pipeline using GitHub Actions and Vercel. Beyond live transit data, the app integrates web 
                    notifications to alert users when a bus is approaching, even when the site is closed, improving reliability for daily commuters. Throughout development, we iterated based on peer testing feedback, addressing 
                    performance bottlenecks, improving geolocation accuracy, and strengthening error handling. This project highlights my experience working with real world APIs, frontend performance optimization, deployment automation, and collaborative software development from planning through production.
                    </p>
            
                    

                    <div className="flex flex-wrap gap-2 mb-4">
                        {["JavaScript", "CSS", "React", "Agile"].map((tech, key) => (
                            <span key={key} className="bg-slate-900 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/CMPT-276-SUMMER-2025/final-project-14-clouds" className="text-cyan-500 hover:text-cyan-400 transition-colors"> 
                        View Github Repo </a>
                    </div>

                    <div>
                <img src={transit} alt="A screenshot of the Vancouver Transit Tracker app showing a map with bus stops and real-time arrival data" 
                className="w-full max-w-5xl mx-auto rounded-xl shadow-lg hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all" />
            </div>


                    

                </div>



                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                    <h3 className="text-3xl font-bold mb-4">Connect 4 agent using Deep Q-Learning</h3>
                    <p className="mb-6 text-gray-300">
                       This project implements a Connect 4 agent using Deep Q-Learning, a reinforcement learning technique that learns optimal gameplay strategies through self-play against
                        a random opponent. The agent learns to evaluate the board positions and select moves that maximize its probability of winning.
                     </p>
                    <p className="mb-6 text-gray-300">Deep Q-Learning is the core AI method we used in this project. The system uses a neural network to approximate Q-values for each
                         possible action. We used a double DQN architecture to separate policy and target networks to stabilize training. We also utilized experience replay memory, that 
                         stores past transitions to break correlation between consecutive training samples.
                            For exploration our model is using Epsilon-Greedy, this allows it to learn a lot early then hone in on learned strategies. Another method we used to improve our model is reward shaping. 
                            We added bonus rewards for dropping a piece in the three center columns, which is strategically advantageous in Connect 4.

                    </p>
            
                    

                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "PettingZoo", "PyYAML"].map((tech, key) => (
                            <span key={key} className="bg-slate-900 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                        ))}
                    </div>
                    <div>
                        <img src={algo} alt="Model training loop visualization"
                        className="w-120 max-w-5xl mx-auto rounded-xl shadow-lg hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all" />
                    </div>
                    <div>
                        <img src={Connect4} alt="A screenshot of the Connect 4 agent playing against a random opponent"
                        className="w-100 max-w-5xl mx-auto rounded-xl shadow-lg hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all" />
                    </div>
                </div>


                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    
                    

                    <h3 className="text-3xl font-bold mb-4">Mixed Martial Arts Data Analysis</h3>
                    <p className="mb-6 text-gray-300">
                    We analyzed 6,500+ UFC (A mixed martial arts fighting organization) bouts from 2010 to 2024 to measure how fighter attributes (height, reach, age, experience, stance) influence outcomes.
                    After cleaning and standardizing the data (e.g. fuzzy-matching names, merging decision categories), we applied descriptive statistics, one-sample t tests, OLS regression and trained three classifiers (Logistic Regression, Random Forest, K-Nearest Neighbors). 
                    Logistic Regression performed best with ~59% accuracy and the highest AUC. 
                    </p>
                    <h3 className="pt-8 text-gray-300"> <strong>Major findings: </strong> decision finishes are increasing, height and reach give small win-rate gains, southpaw stance has an edge, and heavyweights gain a clear advantage when weight differences exceed 30 lbs. </h3>

                    <h4 className="text-2xl font-semibold mb-2">Utilities &amp; Libraries Used</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 pb-6">
                        <li>Data processing: Pandas, NumPy, fuzzywuzzy</li>
                        <li>Visualization: Seaborn, Matplotlib</li>
                        <li>Statistical analysis: statsmodels (OLS regression), SciPy (t tests)</li>
                        <li>Machine learning: scikit-learn’s LogisticRegression, RandomForestClassifier, KNeighborsClassifier</li>
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Python", "NumPy", "Pandas", "Seaborn", "Matplotlib", "fuzzywuzzy"].map((tech, key) => (
                            <span key={key} className="bg-slate-900 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/IsaacPjones/MMA-Analysis" className="text-cyan-500 hover:text-cyan-400 transition-colors"> 
                        View Github Repo </a>
                        

            
                    </div>
            <div>
                <img src={MMA} alt="A line graph displaying the win rates of the fighter with a reach or height advantage. A winrate is shown for each weight class" 
                className="w-full mx-auto pt-4 mb-6 shadow-lg hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all" />
            </div>
            <div>
                <img src={MMA2} alt="A bar graph outlining the win rates of of different weight differences within the heavyweight class" 
                className="w-180 mx-auto pt-4 mb-6 shadow-lg hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all" />
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

                    <div className="flex flex-wrap gap-2 mb-4">
                        {["C++", "CMath"].map((tech, key) => (
                            <span key={key} className="bg-slate-900 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/IsaacPjones/Newton-Fractal-Visulization" className="text-cyan-500 hover:text-cyan-400 transition-colors"> 
                        View Github Repo </a>
                    </div>

                    <div>
                <img src={Newton} alt="A PPM image replicating a newton fractal structure, the main colors are yellow, blue and pink" className="w-180 mx-auto pt-4 mb-6 shadow-lg hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all" />
            </div>


                    

                </div>

            </div>
            

        </div>
        

    </section>
    };