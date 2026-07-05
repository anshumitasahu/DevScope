import { useState } from "react";
import LanguageChart from "./Piechart";

export default function Analyzer() {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [languageData, setLanguageData] = useState([]);

    const token = import.meta.env.VITE_GITHUB_TOKEN;
    const headers = {
        Authorization: `Bearer ${token}`
    }

    async function fetchGitHubData() {
        if (!username.trim()) return;
        try {
            setLoading(true);
            setError("");

            const [userResponse, repoResponse] = await Promise.all([
                fetch(`https://api.github.com/users/${username}`, { headers }),
                fetch(`https://api.github.com/users/${username}/repos`, { headers }),
            ]);

            if (!userResponse.ok) {
                throw new Error("User not found");
            }

            const userData = await userResponse.json();
            const repoData = await repoResponse.json();

            setUser(userData);
            setRepos(repoData);

            const languages = {};

            repoData.forEach((repo) => {
                if (!repo.language) return;

                languages[repo.language] =
                    (languages[repo.language] || 0) + 1;
            });

            const chartData = Object.entries(languages).map(([name, value]) => ({
                name,
                value,
            }));

            setLanguageData(chartData);

        } catch (err) {
            setError(err.message);
            setUser(null);
            setRepos([]);
        } finally {
            setLoading(false)
        }
    }

    const totalStars = repos.reduce(
        (sum, repo) => sum + repo.stargazers_count,
        0
    );

    const totalForks = repos.reduce(
        (sum, repo) => sum + repo.forks_count,
        0
    );

    const language = new Set(
        repos.map(repo => repo.language).filter(Boolean)
    ).size;

    const topRepo =
        repos.length > 0
            ? repos.reduce((best, repo) =>
                repo.stargazers_count > best.stargazers_count ? repo : best
            )
            : null;

    const averageStars =
        repos.length > 0 ? (totalStars / repos.length).toFixed(2) : "0.00";

    const averageForks =
        repos.length > 0 ? (totalForks / repos.length).toFixed(2) : "0.00";

    return (
        <div className="flex flex-col items-center px-8">
            <div className="flex flex-col items-center gap-1 mb-6">
                <h1 className="font-semibold text-5xl">
                    GitHub Profile <span className="text-primary">Analyzer</span>
                </h1>
                <p className="text-text-muted">
                    Enter a GitHub Username to analyze their profile and repositories
                </p>
            </div>
            <div className="bg-amber-50 w-fit rounded-md mb-10">
                <input
                    type="text"
                    placeholder="GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="outline-0 text-black px-4 py-2"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            fetchGitHubData();
                        }
                    }}
                />

                <button onClick={fetchGitHubData} disabled={loading} className="text-white bg-primary px-4 py-2 rounded-md hover:cursor-pointer">
                    {loading ? "Analyzing..." : "Analyze"}
                </button>
            </div>

            {user && (
                <div className="w-full mb-10">
                    <div className="mb-2 font-semibold text-xl">
                        Profile Summary
                    </div>
                    <div className="flex gap-5 bg-card border-2 border-border px-4 py-4 rounded-lg">

                        <div>
                            <img src={user.avatar_url} alt={user.login} width={100} className="rounded-full h-36 w-36 object-cover" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <div>
                                <h2 className="text-2xl font-bold">{user.name} </h2>
                                <h2 className="text-text-muted">@{user.login}</h2>
                                <p>{user.bio}</p>
                                <p>{user.location}</p>
                                <p>{new Date(user.created_at).toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })}</p>
                            </div>
                            <div className="flex gap-4">
                                <p className="border-r-white border-r-2 pr-4">{user.followers} Followers</p>
                                <p className="border-r-white border-r-2 pr-4">{user.public_repos} Public Repos</p>
                                <p className="border-r-white border-r-2 pr-4">{user.following} Following</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {user && (
                <div className="w-full">
                    <div className="mb-10">
                        <div className="mb-2 font-semibold text-xl">
                            Repositories Statistics
                        </div>
                        <div className="flex gap-8">

                            <div className="bg-card border-border border-3 px-4 py-2 rounded-lg">
                                <p className="text-text-muted">
                                    Public Repositories
                                </p>
                                <p className="font-bold text-xl">
                                    {user.public_repos}
                                </p>
                            </div>

                            <div className="bg-card border-border border-3 px-4 py-2 rounded-lg">
                                <p className="text-text-muted">
                                    Total Stars
                                </p>
                                <p className="font-bold text-xl">
                                    {totalStars}
                                </p>
                            </div>

                            <div className="bg-card border-border border-3 px-4 py-2 rounded-lg">
                                <p className="text-text-muted">
                                    Total Forks
                                </p>
                                <p className="font-bold text-xl">
                                    {totalForks}
                                </p>
                            </div>

                            <div className="bg-card border-border border-3 px-4 py-2 rounded-lg">
                                <p className="text-text-muted">
                                    Languages Used
                                </p>
                                <p className="font-bold text-xl">
                                    {language}
                                </p>
                            </div>

                            <div className="bg-card border-border border-3 px-4 py-2 rounded-lg">
                                <p className="text-text-muted">
                                    Top Repository
                                </p>
                                <p className="font-bold text-xl">
                                    {topRepo ? `${topRepo.name} (${topRepo.stargazers_count} ⭐)` : "--"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-45">
                        <div className="mb-2 font-semibold text-xl">
                            Contribution Insights
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="flex gap-8">
                                <div className="bg-card border-border border-3 px-4 py-2 rounded-lg h-full">
                                    <p className="text-text-muted">
                                        Average Stars Per Repository:
                                    </p>
                                    <p className="font-bold text-xl">
                                        {averageStars}
                                    </p>
                                </div>
                                <div className="bg-card border-border border-3 px-4 py-2 rounded-lg h-full">
                                    <p className="text-text-muted">
                                        Average Forks Per Repository:
                                    </p>
                                    <p className="font-bold text-xl">
                                        {averageForks}
                                    </p>
                                </div>
                            </div>
                            <div className="bg-card border-border border-3 px-4 py-2 rounded-lg w-md ">
                                <LanguageChart data={languageData}/>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}