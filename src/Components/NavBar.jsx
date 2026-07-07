import { NavLink } from "react-router-dom";
import Logo from '/Logo-T-C.png'

export default function NavBar() {
    return (
        <nav className='bg-surface w-full flex items-center justify-between px-6 py-5 mb-12 sticky top-0 z-50'>
            <NavLink to="/" className="flex items-center gap-5">
                <div>
                    <img src={Logo} alt="DevScope" className='w-10 object-contain' />
                </div>
                <div className='text-3xl font-bold'>
                    <span className='text-primary'>Dev</span><span className="text-blue-400">Scope</span>
                </div>
            </NavLink>
            <div className="flex items-center gap-16">
                <ul className="flex items-center gap-10 ">

                    <li  >
                        <NavLink to="/" className={({ isActive }) => (isActive ? "text-white border-b-2 transition-colors border-blue-500 pb-1" : "hover:text-blue-300")}>
                            Home
                        </NavLink>
                    </li>

                    <li  >
                        <NavLink to="/Compare" className={({ isActive }) => (isActive ? "text-white border-b-2 transition-colors border-blue-500 pb-1" : "hover:text-blue-300")}>
                            Compare
                        </NavLink>
                    </li>
                </ul>
                <NavLink to="/Analyzer" className='rounded-full border-2 border-blue-400 px-5 py-2 text-white hover:border-blue-300 transition-colors duration-200'>
                    Analyzer
                </NavLink>
            </div>
        </nav>
    );
}