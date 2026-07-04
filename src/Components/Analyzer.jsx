import { useState } from "react";

export default function Analyzer() {
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
                />

                <button onClick={fetchProfile} className="text-white bg-primary px-4 py-2 rounded-md hover:cursor-pointer">
                    Analyze
                </button>
            </div>

            {user && (
                <div className="flex gap-5 bg-card border-2 border-border px-4 py-4 rounded-md w-full">
                    <div>
                        <img src={user.avatar_url} alt={user.login} width={100} className="rounded-full h-36 w-36 object-cover" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <h2 className="text-2xl font-bold">{user.name} </h2>
                            <h2 className="text-text-muted">@{user.login}</h2>
                            <p>{user.bio}</p>
                            <p>{user.location}</p>
                        </div>
                        <div className="flex gap-4">
                            <p className="border-r-white border-r-2 pr-4">{user.followers} Followers</p>
                            <p className="border-r-white border-r-2 pr-4">{user.public_repos} Public Repos</p>
                            <p className="border-r-white border-r-2 pr-4" className="">{user.following} Following</p>
                        </div>
                    </div>
                </div>
            )}

            {/* {user && (

            )} */}

        </div>
    );
}