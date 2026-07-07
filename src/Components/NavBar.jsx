import { NavLink } from "react-router-dom";
import Logo from '/Logo-T-C.png'

export default function NavBar() {
    return (
        <nav className='bg-surface/50 backdrop-blur-md w-full flex items-center justify-between px-6 py-5 mb-12 sticky top-0 z-50'>
            <NavLink to="/" className="flex items-center gap-5">
                <div>
                    <img src={Logo} alt="DevScope" className='w-6 object-contain' />
                </div>
                <div className='text-lg font-bold'>
                    <span className='text-white'>Dev</span><span className="text-white">Scope</span>
                </div>
            </NavLink>
            <div className="flex items-center gap-16">
                <ul className="flex items-center gap-10 ">

                    <li  >
                        <NavLink to="/" className={({ isActive }) => (isActive ? "text-white border-b-2 transition-colors border-primary pb-1" : "hover:text-primary")}>
                            Home
                        </NavLink>
                    </li>

                    <li  >
                        <NavLink to="/Compare" className={({ isActive }) => (isActive ? "text-white border-b-2 transition-colors border-primary pb-1" : "hover:text-primary")}>
                            Compare
                        </NavLink>
                    </li>
                </ul>
                <NavLink to="/Analyzer" className={[
                    "relative text-white font-semibold text-base leading-[22px] tracking-[0.02em]",
                    "px-9 py-3 rounded-xl cursor-pointer transition-all duration-200 ease-out",
                    "border border-[#54A1FD] bg-[radial-gradient(95%_60%_at_50%_75%,#005FD6_0%,#209BFF_100%)]",
                    "shadow-[0px_4px_48px_-12px_#1187FF,inset_0px_1px_8px_-4px_#FFFFFF]",
                    "active:scale-95 active:rotate-1",
                    "after:absolute after:top-[1px] after:right-[10%] after:w-[60%] after:h-[1px]",
                    "after:bg-gradient-to-r after:from-transparent after:via-white/50 after:to-transparent",
                    "hover:brightness-110",
                ].join(" ")}>
                    Analyzer
                </NavLink>
            </div>
        </nav>
    );
}