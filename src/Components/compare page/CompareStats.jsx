export default function CompareStats({ profile1, profile2 }) {

    function getStats(profile) {
        if (!profile) return null;

        const totalStars = profile.repos.reduce(
            (sum, repo) => sum + repo.stargazers_count,
            0
        );

        const totalForks = profile.repos.reduce(
            (sum, repo) => sum + repo.forks_count,
            0
        );

        const joined = new Date(profile.user.created_at);

        const accountAge = Math.floor(
            (Date.now() - joined.getTime()) /
            (1000 * 60 * 60 * 24 * 365.25)
        );

        const languagesUsed = profile.languageData.length;

        return {
            stars: totalStars,
            forks: totalForks,
            accountAge,
            languages: languagesUsed,
            followers: profile.user.followers,
            following: profile.user.following,
            publicRepos: profile.user.public_repos,
        };
    }

    const stats1 = getStats(profile1);
    const stats2 = getStats(profile2);


    return (
        <div className="w-full">
            <div className="flex gap-5 mt-5 mb-20 w-full">
                <div className="py-10 items-center border-y border-y-primary/30 backdrop-blur-sm w-md text-white/80">
                    <p>• Total Stars: {stats1.stars}</p>
                    <p>• Total Forks: {stats1.forks}</p>
                    <p>• Languages Used: {stats1.languages}</p>
                    <p>• Followers: {stats1.followers}</p>
                    <p>• Following: {stats1.following}</p>
                    <p>• Total Repositories: {stats1.publicRepos}</p>
                </div>
                <div className="py-10 items-center border-y border-y-primary/30 backdrop-blur-sm w-md text-white/80">
                    <p>• Total Stars: {stats2.stars}</p>
                    <p>• Total Forks: {stats2.forks}</p>
                    <p>• Languages Used: {stats2.languages}</p>
                    <p>• Followers: {stats2.followers}</p>
                    <p>• Following: {stats2.following}</p>
                    <p>• Total Repositories: {stats2.publicRepos}</p>
                </div>
            </div>
        </div>
    );
}