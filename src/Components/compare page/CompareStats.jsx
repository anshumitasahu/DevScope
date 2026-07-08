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
        <div>
           
        </div>
    );
}