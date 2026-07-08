export default function CompareProfileCards({ profile }) {
    if (!profile) return null;

    const { user } = profile;

    return (
        <div className="flex gap-5 mt-10 mb-20 py-10 w-full items-center border-y border-y-primary/30 backdrop-blur-sm">
            <img src={user.avatar_url} alt={user.login} className="rounded-full h-44 w-44 object-cover" />
            <div className="flex flex-col gap-4">
                <div>
                    <h2 className="text-3xl font-bold"> {user.name || user.login} </h2>
                    <p className="text-text-secondary">@{user.login} </p>
                </div>
                <p className="max-w-5xl">{user.bio || "No bio provided"} </p>
            </div>
        </div>
    );
}