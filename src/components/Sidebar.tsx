import Image from 'next/image'
import { IoBrowsersOutline, IoCalculator, IoLogoReact } from 'react-icons/io5'
import { FaFileCirclePlus, FaFileInvoice, FaFileCircleCheck, FaUserPlus, FaUserGear } from 'react-icons/fa6'
import SidebarMenuItem from './SidebarMenuItem'

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={30} />,
    title: 'Dashboard',
    subtitle: 'Visualizacion'
  },
  {
    path: '/dashboard/newQuote',
    icon: <FaFileCirclePlus size={30} />,
    title: 'New Quote',
    subtitle: 'Create a new quote'
  },
  {
    path: '/dashboard/manageQuote',
    icon: <FaFileInvoice size={30} />,
    title: 'Manage Quote',
    subtitle: 'Edit quotes'
  },
  {
    path: '/dashboard/aproveQuote',
    icon: <FaFileCircleCheck size={30} />,
    title: 'Aprove Quote',
    subtitle: 'Aprove quotes'
  },
  {
    path: '/dashboard/addUser',
    icon: <FaUserPlus size={30} />,
    title: 'Add User',
    subtitle: 'Add new user'
  },
  {
    path: '/dashboard/manageUsers',
    icon: <FaUserGear size={30} />,
    title: 'Manage Users',
    subtitle: 'Edit users'
  },

]

const Sidebar = () => {
    return (
        <div id="menu" 
          /* style={{width : '400px'}} */
          className="w-[100px] md:w-[300px] bg-gray-900 min-h-screen z-10 text-slate-300 left-0">
          <div id="logo" className="my-2 md:my-4 px-2 md:px-6">
            <h1 className="flex flex-col md:flex-row items-center text-lg md:text-2xl font-bold text-white">
              {/* <IoLogoReact className="mr-2 text-blue-500" size={25} /> */}
              <Image
                className='rounded-full w-8 h-8 md:w-12 md:h-12'
                src='/nexera48.png'
                alt='logo'
                width={25}
                height={25}
              />
              <span><span className='text-blue-600'>N</span> Dash</span>
            </h1>
            <p className="text-slate-500 text-sm invisible md:visible">Manage your actions and activities</p>
          </div>
          <div id="profile" className="px-6 py-1 md:py-10">
            <p className="text-xs md:text-base text-slate-500">Welcome <span className='invisible md:visible'>back</span></p>
            <a href="#" className="flex flex-col md:flex-row space-x-2 items-center">
              <span>
                <Image 
                  className="rounded-full w-6 h-6 md:w-8 md:h-8" 
                  src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c" 
                  alt="user avatar"
                  width={50}
                  height={50}
                />
              </span>
              <span className="text-xs md:text-base font-bold">
                  Diego Bonilla
              </span>
            </a>
          </div>
          <div id="nav" className="w-full px-1.5 md:px-4">
            {
              menuItems.map( item => (
                <SidebarMenuItem  
                  key={item.title} {...item}
                />
              ))
            }
          </div>
        </div>
    )
}

export default Sidebar