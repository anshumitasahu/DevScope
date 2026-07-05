import { NavLink } from "react-router-dom";
import Logo from '/home/rem/Desktop/projects/frontend/DevScope/DevScope/src/assets/Logo-T-C.png'

export default function NavBar() {
    return (
        <div className='bg-surface w-screen flex items-center justify-between px-6 py-5 mb-12 sticky top-0'>
            <div className="flex items-center gap-5">
                <div>
                    <img src={Logo} alt="" className='w-10 object-contain' />
                </div>
                <div className='text-3xl font-bold'>
                    <span className='text-primary'>Dev</span><span className="">Scope</span>
                </div>
            </div>
            <div className="flex items-center gap-20">
                <ul className="flex items-center gap-10 ">

                    <li  >
                        <NavLink to="/" className={({ isActive }) => (isActive ? "text-white border-b-3 border-violet-500 pb-1" : "hover:text-primary")}>
                            Home
                        </NavLink>
                    </li>

                    <li>Features</li>
                    <li>Compare</li>
                    <li>GitHub</li>
                </ul>
                <NavLink to="/Analyzer" className='rounded-lg bg-primary px-5 py-2 text-white hover:bg-primary-hover transition'>
                    Analyzer
                </NavLink>
            </div>
        </div>
    );
}