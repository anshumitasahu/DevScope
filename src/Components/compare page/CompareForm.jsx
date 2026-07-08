export default function CompareForm({
    username1, username2 , setUsername1, setUsername2 , onCompare
}) {
    return (
        <div>
            <div>
                <input type="text" placeholder="Enter GitHub Username" value={username1} onChange={(e) => setUsername1(e.target.value)} />
                <input type="text" placeholder="Enter GitHub Username" value={username2} onChange={(e) => setUsername2(e.target.value)} />
            </div>
            <button onClick={onCompare}>Compare</button>
        </div>
    );
}