import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    function fetchProfile() {
        // try {
        //     const response = await fetch(
        //         `https://api.github.com/users/${username}`
        //     );

        //     if (!response.ok) {
        //         throw new Error("User not found");
        //     }

        //     const data = await response.json();
        //     setUser(data);
        // } catch (err) {
        //     console.error(err);
        // }
        if (!username) {
            alert("give the username");
            return;
        }
        navigate(`/Analyzer?name=${username}`)
    }

    return (
        <div className='px-50 flex flex-col items-center'>
            <div className="flex flex-col gap-3 mb-10">
                <div className='rounded-full bg-violet-600/30 text-purple-300 px-4 py-1 w-fit'>
                    GitHub Profile Analyzer
                </div>
                <div className='text-7xl font-bold max-w-5xl'>
                    Analyze GitHub Profiles <br /><span className='text-violet-600'>Like Never Before.</span>
                </div>

                <div className="text-text-muted">
                    Discover contribution patterns, repository insights, language usage, and developer statistics—all from a single GitHub username.
                </div>
            </div>

            <div className="bg-amber-50 w-fit rounded-md mb-10">
                <input
                    type="text"
                    placeholder="GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key == "Enter") {
                            fetchProfile();
                        }
                    }}
                    className="outline-0 text-black px-6 py-3z w-md"
                />

                <button onClick={fetchProfile} className="text-white bg-primary px-6 py-3 rounded-md hover:cursor-pointer">
                    Analyze
                </button>
            </div>
        </div>
    );
}