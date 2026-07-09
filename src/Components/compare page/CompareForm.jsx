import BorderBeam from "border-beam";
import { MetalFx } from "metal-fx";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

export default function CompareForm({
    username1, username2, setUsername1, setUsername2, onCompare
}) {
    return (
        <div className="flex flex-col items-center gap-10">
            <div className="flex gap-10">
                <BorderBeam size="line" colorVariant="colorful" strength={0.79}>
                    <div className="bg-white/20 backdrop-blur-md rounded-full">
                        <input
                            aria-label="GitHub username"
                            type="text"
                            className="w-md px-6 py-4 bg-transparent outline-none text-neutral-50"
                            placeholder="GitHub username"
                            value={username1}
                            onChange={(e) => setUsername1(e.target.value)}
                        />
                    </div>
                </BorderBeam>
                <BorderBeam size="line" colorVariant="colorful" strength={0.79}>
                    <div className="bg-white/20 backdrop-blur-md rounded-full">
                        <input
                            aria-label="GitHub username"
                            type="text"
                            className="w-md px-6 py-4 bg-transparent outline-none text-neutral-50"
                            placeholder="GitHub username"
                            value={username2}
                            onChange={(e) => setUsername2(e.target.value)}
                        />
                    </div>
                </BorderBeam>
            </div>
            <MetalFx preset="chromatic" variant="circle" strength={1} paused={false}>
                <button onClick={onCompare} className="bg-black/40 text-white p-4 rounded-full hover:bg-black/40 hover:cursor-pointer font-bold">
                    Compare
                </button>
            </MetalFx>
        </div>
    );
}