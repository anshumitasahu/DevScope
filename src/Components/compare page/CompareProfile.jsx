export default function CompareProfileCards({ profile }) {
    if (!profile) return null;

    const { user } = profile;

    return (
        <div>
            <img src={user.avatar_url} />
            <h2>{user.name || user.login}</h2>
            <p>{user.bio}</p>
        </div>
    );
}