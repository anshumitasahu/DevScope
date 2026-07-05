import { useState } from "react";

export default function Home() {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);

    async function fetchProfile() {
        try {
            const response = await fetch(
                `https://api.github.com/users/${username}`
            );

            if (!response.ok) {
                throw new Error("User not found");
            }

            const data = await response.json();
            setUser(data);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className='px-10 flex flex-col items-center'>
            <div className='flex justify-between pt-12'>
                <div className="flex flex-col gap-3">
                    <div className='rounded-full bg-violet-600/30 text-purple-300 px-4 py-1 w-fit'>
                        GitHub Profile Analyzer
                    </div>
                    <div className='text-5xl font-bold max-w-2xl'>
                        Analyze GitHub Profiles <br /><span className='text-violet-600'>Like Never Before.</span>
                    </div>

                    <div className="">
                        Discover contribution patterns, repository insights, language usage, and developer statistics—all from a single GitHub username.
                    </div>
                </div>

                <div className='w-xl'>
                    <img src="/HeadImg.png" alt="" />
                </div>
            </div>

            <div className="bg-amber-50 w-fit rounded-md mb-10">
                <input
                    type="text"
                    placeholder="GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="outline-0 text-black px-4 py-2"
                />

                <button onClick={fetchProfile} className="text-white bg-primary px-4 py-2 rounded-md hover:cursor-pointer">
                    Analyze
                </button>
            </div>

            {user && (
                <div className="flex gap-5 bg-card border-2 border-border px-4 py-4 rounded-md">
                    <div>
                        <img src={user.avatar_url} alt={user.login} width={100} className="rounded-md h-36 w-36 object-cover" />
                    </div>
                    <div className="">
                        <div>
                            <h2 className="text-xl font-bold">{user.name} </h2>
                            <h2 className="text-text-muted">@{user.login}</h2>
                        </div>
                        <div>
                            <p>{user.bio}</p>
                            <p>Followers: {user.followers}</p>
                            <p>Public Repos: {user.public_repos}</p>
                            <p className="">{user.following} Following</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}