import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CompareForm from "./compare page/CompareForm";
import CompareProfileCards from "./compare page/CompareProfile";
import CompareStats from "./compare page/CompareStats";

export default function Compare() {
    const [loading, setLoading] = useState(false);

    const [username1, setUsername1] = useState("");
    const [username2, setUsername2] = useState("");

    const [profile1, setProfile1] = useState(null);
    const [profile2, setProfile2] = useState(null);

    const [error, setError] = useState("");

    async function fetchProfile(username) {
        const token = import.meta.env.VITE_GITHUB_TOKEN;

        const headers = {
            Authorization: `Bearer ${token}`,
        };

        const [userResponse, repoResponse] = await Promise.all([
            fetch(`https://api.github.com/users/${username}`, { headers }),
            fetch(`https://api.github.com/users/${username}/repos`, { headers }),
        ]);

        if (!userResponse.ok) {
            throw new Error("User not found");
        }

        const user = await userResponse.json();
        const repos = await repoResponse.json();

        const languages = {};

        repos.forEach((repo) => {
            if (!repo.language) return;

            languages[repo.language] =
                (languages[repo.language] || 0) + 1;
        });

        const languageData = Object.entries(languages).map(([name, value]) => ({
            name,
            value,
        }));

        return {
            user,
            repos,
            languageData,
        };
    }

    async function compareUsers() {
        if (!username1.trim() || !username2.trim()) {
            alert("Please enter both GitHub usernames");
            return;
        }
        try {
            setLoading(true)
            setError("");

            const [profileA, profileB] = await Promise.all([
                fetchProfile(username1),
                fetchProfile(username2)
            ])
            setProfile1(profileA);
            setProfile2(profileB);
        }
        catch (err) {
            setError(err.message);
        }
        finally {
            setLoading(false)
        }
    }





    return (
        <div className="min-h-screen flex flex-col items-center px-8 pt-5 max-w-7xl mx-auto">
            <div className="text-primary text-4xl">
                Compare GitHub Profiles
            </div>
            <div>
                <CompareForm
                    username1={username1}
                    username2={username2}
                    setUsername1={setUsername1}
                    setUsername2={setUsername2}
                    onCompare={compareUsers}
                />
            </div>
            <div className="grid grid-cols-2 gap-8 mt-10">
                <CompareProfileCards profile={profile1} />
                <CompareProfileCards profile={profile2} />
            </div>

            <div>
                {profile1 && profile2 && (
                    <CompareStats
                        profile1={profile1}
                        profile2={profile2}
                    />
                )}
            </div>

        </div>
    )
}