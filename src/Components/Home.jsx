import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GitBranch, UserCircle, ChartPieIcon, ArrowUpRightIcon, ArrowUpIcon } from "@phosphor-icons/react";
import BorderBeam from "border-beam";
import { MetalFx } from "metal-fx";

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
                    Analyze GitHub Profiles <br /> <span className="text-white">Like</span><span className='metallic-text'> Never Before </span>
                </div>
                <div className="text-center py-3 text-lg text-neutral-400">
                    Get insights into any public GitHub profile with a single search.
                </div>
            </div>
            <div className="flex gap-4">
                <BorderBeam size="line" colorVariant="colorful" strength={0.79}>
                    <div className="bg-white/20 backdrop-blur-md rounded-full">
                        <input
                            aria-label="GitHub username"
                            type="text"
                            className="w-md px-6 py-4 bg-transparent outline-none text-neutral-50"
                            placeholder="GitHub username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key == "Enter") {
                                    fetchProfile();
                                }
                            }}
                        />
                    </div>
                </BorderBeam>
                <MetalFx preset="chromatic" variant="circle" strength={1} paused={false}>
                    <button onClick={fetchProfile} className="bg-black/40 text-white p-4 rounded-full hover:bg-black/40 hover:cursor-pointer font-bold">
                        <ArrowUpRightIcon size={24} />
                    </button>
                </MetalFx>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mt-24 w-full">
                <div className="bg-card/30 p-6 border border-white/60 rounded-2xl hover:-translate-y-1 hover:border-primary-hover transition-all duration-200">
                    <div className="flex items-center gap-3 mb-3">
                        <GitBranch size={28} className="text-white" weight="regular" />
                        <h2 className="text-white">
                            Repository Insights
                        </h2>
                    </div>
                    <p className="text-neutral-400">
                        View stars, forks, activity and top repositories.
                    </p>
                </div>
                <div className="bg-card/30 p-6 border border-white/60 rounded-2xl hover:-translate-y-1 hover:border-primary-hover transition-all duration-200 ">
                    <div className="flex items-center gap-3 mb-3">
                        <UserCircle size={28} className="text-white" weight="regular" />
                        <h2 className="text-white">
                            Developer Profile
                        </h2>
                    </div>
                    <p className="text-neutral-400">
                        Access profile metrics, followers and account details.
                    </p>
                </div>
                <div className="bg-card/30 p-6 border border-white/60 rounded-2xl  hover:-translate-y-1 hover:border-primary-hover transition-all duration-200">
                    <div className="flex items-center gap-3 mb-3">
                        <ChartPieIcon size={28} className="text-white" weight="regular" />
                        <h2 className="text-white">
                            Language Statistics
                        </h2>
                    </div>
                    <p className="text-neutral-400">
                        Explore language usage with interactive charts.
                    </p>
                </div>
            </div>
        </div>
    );
}