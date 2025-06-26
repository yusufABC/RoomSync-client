import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { use, useContext,  useState } from 'react';
import { Handshake, House } from 'lucide-react';
import { ClipboardList } from 'lucide-react';
import { TableProperties } from 'lucide-react';

const Header = () => {
      
    const { handleSignOut, user, loader } = useContext(AuthContext)
      const { theme, toggleTheme } = use(AuthContext);

    console.log(user)
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false);
    if (loader) {
        return <div>loading....</div>
    }

    return (
        <header className="sticky top-0 z-50 p-4 backdrop-blur-xs text-gray-800">
            <div className="container flex items-center justify-between h-16 mx-auto">
                <div className="flex">
                    <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center">


                        <img className='w-[120px] ' src="logo.png" alt="" />
                    </a>


                </div>
                <div className="items-center flex-shrink-0 hidden lg:flex gap-6">
                    <ul className="items-center  hidden space-x-3 lg:flex">
                        <li className="flex">
                        <NavLink to={'/'} className={({ isActive }) =>
                                `flex items-center px-4 -mb-1 border-b-2 border-transparent rounded ${isActive ? 'text-orange-400' : theme === 'dark' ? 'text-white' : 'text-black'}`
                            }>  <House /> Home</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink to={'/browselisting'} className={({ isActive }) =>
                                `flex items-center px-4 -mb-1 border-b-2 border-transparent rounded ${isActive ? 'text-orange-400' : theme === 'dark' ? 'text-white' : 'text-black'}`
                            }>   <ClipboardList /> Browse Listing</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink to={'/details'} className={({ isActive }) =>
                                `flex items-center px-4 -mb-1 border-b-2 border-transparent rounded ${isActive ? 'text-orange-400' : theme === 'dark' ? 'text-white' : 'text-black'}`
                            }>   <ClipboardList /> Details</NavLink>
                        </li>
                        {

                            user ?
                                <>

                                    <li className="flex">
                                        <NavLink to={'/mylisting'} className={({ isActive }) =>
                                            `flex items-center px-4 -mb-1 border-b-2 border-transparent rounded ${isActive ? 'text-orange-400' : theme === 'dark' ? 'text-white' : 'text-black'}`
                                        }><TableProperties />My Listing</NavLink>
                                    </li>
                                    <li className="flex">
                                        <NavLink to={'/addtofindroommate'} className={({ isActive }) =>
                                            `flex items-center px-4 -mb-1 border-b-2 border-transparent rounded ${isActive ? 'text-orange-400' : theme === 'dark' ? 'text-white' : 'text-black'}`
                                        }> <Handshake />Find Room Mate</NavLink>
                                    </li>
                                </>
                                : <li className="flex">
                                    <NavLink to={'/signup'} className={({ isActive }) =>
                                        `flex items-center px-4 -mb-1 border-b-2 border-transparent rounded ${isActive ? 'text-orange-400' : theme === 'dark' ? 'text-white' : 'text-black'}`
                                    }>Sign Up</NavLink>
                                </li>

                        }

                            <label className="flex items-center gap-2 text-white">
                                <span>
                                    {theme === 'light' ? '🌞' : '🌙'}
                                </span>

                        <input type="checkbox"   onChange={toggleTheme} defaultChecked className={`toggle toggle-sm ${theme==='light'?'text-black':'text-white'}`}/>

                            </label>



                    </ul>


                    {
                        user ? <button className="btn" onClick={handleSignOut} >Sign Out</button> : <button className="btn" onClick={() => navigate("/signup")}>Sign Up</button>
                    }
                    <div className="relative group">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="User Avatar"
                                    src={
                                        user?.photoURL ||
                                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    }
                                    className="w-10 h-10 rounded-full"
                                />
                            </div>
                        </div>

                 
                        <div className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 bg-base-200 p-2 rounded shadow text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 w-max">
                            <p><strong>Name:</strong> {user?.displayName || 'Unknown'}</p>
                            <p><strong>Email:</strong> {user?.email || 'N/A'}</p>
                        </div>
                    </div>


                </div>

               <button onClick={() => setMenuOpen(!menuOpen)} className="p-4 lg:hidden">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>

            </div>


            {menuOpen && (
  <div className="lg:hidden px-4 pt-2 pb-4 space-y-2 bg-white text-black shadow-md z-50">
    <NavLink to="/" className="block" onClick={() => setMenuOpen(false)}>Home</NavLink>
    <NavLink to="/browselisting" className="block" onClick={() => setMenuOpen(false)}>Browse Listing</NavLink>
    <NavLink to="/details" className="block" onClick={() => setMenuOpen(false)}>Details</NavLink>
    {user && (
      <>
        <NavLink to="/mylisting" className="block" onClick={() => setMenuOpen(false)}>My Listing</NavLink>
        <NavLink to="/addtofindroommate" className="block" onClick={() => setMenuOpen(false)}>Find Room Mate</NavLink>
      </>
    )}
    {!user && (
      <NavLink to="/signup" className="block" onClick={() => setMenuOpen(false)}>Sign Up</NavLink>
    )}
    <button  onClick={toggleTheme} className="block">
      {theme === 'light' ? 'Switch to Dark 🌙' : 'Switch to Light 🌞'}
    </button>
    {user ? (
      <button onClick={handleSignOut} className="block">Sign Out</button>
    ) : (
      <button onClick={() => { navigate("/signup"); setMenuOpen(false); }} className="block">Sign Up</button>
    )}
  </div>
)}
        </header>
    );
};

export default Header;