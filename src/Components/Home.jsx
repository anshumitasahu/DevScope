import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    function fetchProfile() {
        if (!username) {
            alert("Please enter a valid GitHub username");
            return;
        }
        navigate(`/Analyzer?name=${username}`)
    }

    return (
        <div className='flex flex-col max-w-6xl mx-auto px-6 items-center'>
            <div>
                <div className='text-6xl font-bold max-w-4xl text-center'>
                    Analyze GitHub Profiles <br /> <span className="text-blue-400">Like</span><span className='text-violet-600'> Never Before.</span>
                </div>
                <div className="text-center py-3 text-mauve-200">
                    Get insights into any public GitHub profile with a single search.
                </div>
            </div>
            <div className="mt-10
    flex items-center rounded-full bg-white border border-blue-300 transition-all duration-200 focus-within:ring-4 focus-within:ring-blue-500/40 focus-within:border-blue-500">
                <input
                    aria-label="GitHub username"
                    type="text"
                    className="w-md px-6 py-4 bg-transparent outline-none text-black"
                    placeholder="GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key == "Enter") {
                            fetchProfile();
                        }
                    }}
                />

                <button onClick={fetchProfile} className="bg-blue-500 text-white px-6 py-4 rounded-full hover:bg-blue-600 hover:cursor-pointer">
                    Analyze
                </button>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mt-24 w-full">
                <div className="bg-card p-3 border border-blue-400 rounded-lg hover:-translate-y-1 hover:border-violet-500 transition-all duration-200">
                    <div>

                    </div>
                    <div>
                        <h1 className="text-blue-100">
                            Repository Insights
                        </h1>
                        <p className="text-text-secondary">
                            View stars, forks, activity and top repositories.
                        </p>
                    </div>
                </div>
                <div className="bg-card p-3 border border-blue-400 rounded-lg hover:-translate-y-1 hover:border-violet-500 transition-all duration-200">
                    <h1 className="text-blue-100">
                        Developer Profile
                    </h1>
                    <p className="text-text-secondary">
                        Access profile metrics, followers and account details.
                    </p>
                </div>
                <div className="bg-card p-3 border border-blue-400 rounded-lg  hover:-translate-y-1 hover:border-violet-500 transition-all duration-200">
                    <h1 className="text-blue-100">
                        Language Statistics
                    </h1>
                    <p className="text-text-secondary">
                        Explore language usage with interactive charts.
                    </p>
                </div>
            </div>
        </div>
    );
}