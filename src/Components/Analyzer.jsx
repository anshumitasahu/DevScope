import { useEffect, useState } from "react";
import LanguageChart from "./Piechart";
import { useSearchParams } from "react-router-dom";
import { StarIcon, GitForkIcon, CodeIcon, GitBranchIcon, TrophyIcon } from "@phosphor-icons/react";


export default function Analyzer() {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [languageData, setLanguageData] = useState([]);
    const [queryparam] = useSearchParams();
    const query = queryparam.get("name");
    const [isTyping, setIsTyping] = useState(false);

    const token = import.meta.env.VITE_GITHUB_TOKEN;
    const headers = {
        Authorization: `Bearer ${token}`
    }

    useEffect(() => {
        if (query && !isTyping) {
            console.log(query);
            setUsername(query);
            fetchGitHubData();
        }
    }, [query, username])

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

    const joinedDate = user ? new Date(user.created_at) : null;

    let years = 0;
    let months = 0;

    if (joinedDate) {
        const now = new Date();

        years = now.getFullYear() - joinedDate.getFullYear();
        months = now.getMonth() - joinedDate.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }
    }

    const truncate = (text, maxLength) => {
        if (!text) return "No description available.";
        return text.length > maxLength
            ? text.slice(0, maxLength) + "..."
            : text;
    };

    return (
        <div className="flex flex-col items-center px-8 pt-5">
            <div className="flex flex-col items-center gap-1 mb-14">
                <h1 className="font-semibold text-5xl">
                    <span className="text-blue-400"> GitHub Profile</span> <span className="text-primary">Analyzer</span>
                </h1>
                <p className="text-text-muted text-sm"> Enter a GitHub Username to analyze their profile and repositories </p>
            </div>
            <div className="bg-white w-fit rounded-full mb-10 focus-within:ring-8 focus-within:ring-primary/20">
                <input
                    type="text"
                    placeholder="GitHub username"
                    value={username}
                    className="outline-0 text-black px-4 py-2 w-94"
                    onChange={(e) => {
                        setIsTyping(true);
                        setUsername(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            fetchGitHubData();
                        }
                    }}
                />

                <button onClick={fetchGitHubData} disabled={loading} className="text-white bg-primary px-4 py-2 rounded-full hover:cursor-pointer">
                    {loading ? "Analyzing..." : "Analyze"}
                </button>
            </div>

            {user && (
                <div className="flex gap-8 mt-10 mb-20 py-10 w-full items-center border-y border-y-blue-400/30">
                    <img src={user.avatar_url} alt={user.login} className="rounded-full h-44 w-44 object-cover" />
                    <div className="flex flex-col gap-4">
                        <div>
                            <h2 className="text-3xl font-bold"> {user.name || user.login} </h2>
                            <p className="text-text-secondary">@{user.login} </p>
                        </div>
                        <p className="max-w-5xl">{user.bio || "No bio provided"} </p>
                        <div className="flex gap-3 text-sm text-text-muted">
                            <p>{user.followers} Followers</p>
                            <p>•</p>
                            <p>{user.following} Following</p>
                            <p>•</p>
                            <p>{user.public_repos} Repositories</p>
                        </div>
                    </div>
                </div>
            )}

            {user && (
                <div className="w-full">
                    <div className="mb-20">
                        <div className="mb-2 font-semibold text-xl"> Repository Insights</div>
                        <div className="grid grid-cols-4 gap-6">
                            <div className="flex gap-5 items-center bg-card border-border border-3 px-3 py-4 rounded-lg h-fit">
                                <StarIcon size={28} color="#3584e4" weight="duotone" />
                                <div>
                                    <p className="text-text-muted mb-2">Total Stars</p>
                                    <p className="font-bold text-xl">{totalStars}</p>
                                </div>
                            </div>
                            <div className=" flex gap-5 items-center bg-card border-border border-3 px-3 py-4 rounded-lg h-fit">
                                <GitForkIcon size={28} color="#3584e4" weight="duotone" />
                                <div>
                                    <p className="text-text-muted mb-2">Total Forks</p>
                                    <p className="font-bold text-xl">{totalForks}</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-center bg-card border-border border-3 px-3 py-4 rounded-lg h-fit">
                                <CodeIcon size={28} color="#3584e4" />
                                <div>
                                    <p className="text-text-muted mb-2">Languages Used</p>
                                    <p className="font-bold text-xl">{language}</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-center bg-card border-border border-3 px-3 py-4 rounded-lg h-fit">
                                <TrophyIcon size={28} color="#3584e4" weight="duotone" />
                                <div>
                                    <p className="text-text-muted mb-2">  Top Repository</p>
                                    <p className="font-bold text-xl">{topRepo ? `${topRepo.name}` : "--"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 font-semibold text-xl">Contribution Insights</div>
                        <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
                            <div className="grid grid-rows gap-6">
                                <div className="bg-card border-border border-3 px-3 py-4 rounded-lg h-fit">
                                    <p className="text-text-muted mb-2">Account Age</p>
                                    <p className="font-bold text-xl">{years} years {months} months</p>
                                </div>
                                <div className="bg-card border-border border-3 px-3 py-4 rounded-lg h-fit">
                                    <p className="text-text-muted mb-2">Average Stars Per Repository</p>
                                    <p className="font-bold text-xl">{averageStars} </p>
                                </div>
                                <div className="bg-card border-border border-3 px-4 py-4 rounded-lg h-fit">
                                    <p className="text-text-muted mb-2">Average Forks Per Repository</p>
                                    <p className="font-bold text-xl">{averageForks}</p>
                                </div>
                            </div>
                            <div className="bg-card border-border border-3 px-3 py-4 rounded-lg w-full h-fit">
                                <p className="text-text-muted mb-2">Language Chart Card</p>
                                <LanguageChart data={languageData} />
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div>
                <div className="mb-2 font-semibold text-xl">
                    <h2>
                        Repositories: {repos.length}
                    </h2>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {repos.map((repo) => (
                        <article key={repo.id} className="bg-card border-border border-3 rounded-xl p-6 hover:border-primary">
                            <h3 className="text-2xl font-semibold text-primary">
                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {repo.name}
                                </a>
                            </h3>

                            <p className="text-text-muted mb-1">{truncate(repo.description, 35)}</p>

                            <div className="mt-3 text-lg">
                                <span>•{repo.language || "N/A"}</span>
                            </div>

                            <div className="flex gap-5 text-text-muted text-sm mb-2 mt-3">
                                <span>Stars: {repo.stargazers_count}</span>
                                <span>Forks: {repo.forks_count}</span>
                                <span>Watchers: {repo.watchers_count}</span>
                                <span>Issues: {repo.open_issues_count}</span>
                            </div>

                            <div className="flex gap-1">
                                <span className="border-r border-r-white pr-2">
                                    Created:{" "}
                                    {new Date(repo.created_at).toLocaleDateString()}
                                </span>

                                <span className="border-l border-l-white pl-2">
                                    Updated:{" "}
                                    {new Date(repo.updated_at).toLocaleDateString()}
                                </span>
                            </div>


                            {repo.license && (
                                <p className="text-xs mt-1 mb-1">
                                    License: {repo.license.name}
                                </p>
                            )}


                            <div className="flex justify-between mt-3">
                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary px-4 py-2 rounded-full hover:bg-primary-hover"
                                >
                                    View Repo
                                </a>

                                {repo.homepage && (
                                    <a
                                        href={repo.homepage}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border-primary border-2 px-4 py-2 rounded-full hover:border-primary-hover"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}