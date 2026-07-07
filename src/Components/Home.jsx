import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GitBranch, UserCircle, ChartPieIcon } from "@phosphor-icons/react";

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
            <div className="py-12">
                <div className='text-7xl font-bold max-w-4xl text-center font-base'>
                    Analyze GitHub Profiles <br /> <span className="text-white">Like</span><span className='text-primary'> Never Before </span>
                </div>
                <div className="text-center py-3 text-lg text-neutral-300">
                    Get insights into any public GitHub profile with a single search.
                </div>
            </div>
            <div className="mt-10
    flex items-center rounded-full bg-white border border-white/60 transition-all duration-200 focus-within:ring-4 focus-within:ring-primary/40 focus-within:border-white/60">
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

                <button onClick={fetchProfile} className="bg-primary text-white px-6 py-4 rounded-full hover:bg-primary hover:cursor-pointer font-bold">
                    Analyze
                </button>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mt-24 w-full">
                <div className="bg-card p-6 border border-white/60 rounded-xl hover:-translate-y-1 hover:border-violet-500 transition-all duration-200">
                    <div className="flex items-center gap-3 mb-3">
                        <GitBranch size={28} className="text-white" weight="regular" />
                        <h2 className="text-white">
                            Repository Insights
                        </h2>
                    </div>
                    <p className="text-text-secondary">
                        View stars, forks, activity and top repositories.
                    </p>
                </div>
                <div className="bg-card p-6 border border-white/60 rounded-xl hover:-translate-y-1 hover:border-violet-500 transition-all duration-200 ">
                    <div className="flex items-center gap-3 mb-3">
                        <UserCircle size={28} className="text-white" weight="regular" />
                        <h2 className="text-white">
                            Developer Profile
                        </h2>
                    </div>
                    <p className="text-text-secondary">
                        Access profile metrics, followers and account details.
                    </p>
                </div>
                <div className="bg-card p-6 border border-white/60 rounded-xl  hover:-translate-y-1 hover:border-violet-500 transition-all duration-200">
                    <div className="flex items-center gap-3 mb-3">
                        <ChartPieIcon size={28} className="text-white" weight="regular" />
                        <h2 className="text-white">
                            Language Statistics
                        </h2>
                    </div>
                    <p className="text-text-secondary">
                        Explore language usage with interactive charts.
                    </p>
                </div>
            </div>
        </div>
    );
}