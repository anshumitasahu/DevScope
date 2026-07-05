import { Pie, PieChart, Tooltip } from 'recharts';

export default function LanguageChart({ data }) {
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

        } catch (err) {
            setError(err.message);
            setUser(null);
            setRepos([]);
        } finally {
            setLoading(false)
        }
    }

    return (
        <PieChart
            style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
            responsive
        >

            <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"
                fill="#8B5CF6"
                label
            // isAnimationActive={isAnimationActive}
            />
            {/* <Tooltip defaultIndex={defaultIndex} /> */}
            {/* <RechartsDevtools /> */}
        </PieChart>
    );
}