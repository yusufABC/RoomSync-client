import { use, useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { BsBrowserEdge, BsGraphUp } from 'react-icons/bs'
// import MenuItem from './Menu/MenuItem'

// import useAuth from '../../../hooks/useAuth'

// import AdminMenu from './Menu/AdminMenu'
import { Link, NavLink } from 'react-router'
import AddToFindRoomMate from '../../Pages/AddToFindRoomMate'
import { ClipboardList, Handshake, House, TableProperties } from 'lucide-react'
import { AuthContext } from '../../context/AuthContext'
import { MdFindInPage } from 'react-icons/md'
// import SellerMenu from './Menu/SellerMenu'
// import CustomerMenu from './Menu/CustomerMenu'
// import logo from '../../../assets/images/logo-flat.png'
const Sidebar = () => {
  // const { logOut } = useAuth()
  const { handleSignOut, theme } = use(AuthContext)
  const [isActive, setActive] = useState(false)

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
              <img
                // className='hidden md:block'
                src='https://i.ibb.co/4ZXzmq5/logo.png'
                alt='logo'
                width='100'
                height='100'
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
          }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center  mx-auto'>
              <Link to='/'>
                <img
                  // className='hidden md:block'
                  src='logo.png'
                  alt='logo'
                  width='100'
                  height='100'
                />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            <nav className='space-y-7 mt-10'>
             <h2 className='mb-6'>Menu Items</h2>
                    <li className="flex">
                <NavLink to={'/'} className={({ isActive }) =>
                  `flex text-2xl items-center px-4 -mb-1 border-b-2 border-transparent rounded ${isActive ? 'text-orange-400' : theme === 'dark' ? 'text-white' : 'text-black'}`
                }><House />Home</NavLink>
              </li> 
              <li className="flex">
                <NavLink to={'mylisting'} className={({ isActive }) =>
                  `flex text-2xl items-center px-4 -mb-1 border-b-2 border-transparent rounded ${isActive ? 'text-orange-400' : theme === 'dark' ? 'text-white' : 'text-black'}`
                }><ClipboardList />My Listing</NavLink>
              </li>

              <li className="flex">
                <NavLink to={'addtofindroommate'} className={({ isActive }) =>
                  `flex text-2xl items-center px-4 -mb-1 border-b-2 border-transparent rounded ${isActive ? 'text-orange-400' : theme === 'dark' ? 'text-white' : 'text-black'}`
                }> <MdFindInPage/>Find Room Mate</NavLink>
              </li>
        
                

              {/* <CustomerMenu /> */}
              {/* <SellerMenu /> */}

              {/* <MenuItem
                icon={BsGraphUp}
                label='Statistics'
                address='/dashboard'
              /> */}
              {/* <AdminMenu /> */}
            </nav>
          </div>
        </div>

        <div>
          <hr />
          {/* 
          <MenuItem
            icon={FcSettings}
            label='Profile'
            address='/dashboard/profile'
          /> */}
          <button
            onClick={handleSignOut}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
