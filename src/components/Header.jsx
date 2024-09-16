import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IoSearch, IoSunnySharp } from 'react-icons/io5';
import { FaMoon } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, MenuGroup } from '@chakra-ui/react';

const Header = ({ theme, setTheme }) => {
  const { pathname } = useLocation();
  const [path, setPath] = useState('Dashboard');

  // Function to determine the path name
  const getPathName = (path) => {
    if (path === '/') {
      return 'Main Dashboard';
    }
    return (path.split('/')[1][0].toUpperCase() + path.split('/')[1].slice(1)) || 'Main Dashboard'; // Fallback to 'Dashboard' if split result is empty
  };

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Apply theme class to the body element
  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
    document.body.classList.toggle('light', theme === 'light');
  }, [theme]);

  // Update path state when pathname changes
  useEffect(() => {
    setPath(getPathName(pathname));
  }, [pathname]);

  // Page Header Component
  const PageHeader = () => (
    <div>
      <h6 className=' text-sm'>Page / {path}</h6>
      <h1 className='text-2xl font-bold capitalize'>{path}</h1>
    </div>
  );

  // Search Bar Component
  const SearchBar = () => (
    <div className='w-[24rem] h-16 bg-comp-light-bg dark:bg-comp-dark-bg rounded-full  p-2 flex items-center gap-2 justify-between sticky top-0'>
      <div className='w-[14.5rem] h-full bg-main-light-bg  dark:bg-main-dark-bg rounded-full flex items-center pl-4 gap-2 text-lg'>
        <IoSearch className='text-xl text-gray-400'/>
        <input type="text" placeholder='Search...' className='w-full h-full bg-transparent outline-none text-sm' />
      </div>
      <IoIosNotifications className='text-xl cursor-pointer text-gray-400 select-none' />
      <div className='text-lg text-gray-400 cursor-pointer hover:bg-gray-200 p-1 rounded-full select-none' onClick={toggleTheme}>
        {theme === 'light' ? <IoSunnySharp /> : <FaMoon />}
      </div>
      <Menu>
        <MenuButton>
          <div className='avatar w-10 h-10 rounded-full bg-gray-400 overflow-hidden cursor-pointer select-none'>
            <img src="https://ineurondhruvil.vercel.app/assets/team_images/hitesh_choudhary.png" alt="profile" className='w-full h-full object-cover' />
          </div>
        </MenuButton>
        <MenuList borderRadius={"20px"} className='bg-light-blue dark:bg-main-dark-bg rounded-full shadow-md overflow-hidden  relative z-40'>
          <MenuGroup title='Hey Hitesh.!'>
            <MenuDivider className='border-gray-200 dark:border-gray-600' />
            <MenuItem className='bg-light-blue dark:bg-main-dark-bg hover:bg-blue-200 dark:hover:bg-gray-700'>New File</MenuItem>
            <MenuItem className='bg-light-blue dark:bg-main-dark-bg hover:bg-blue-200 dark:hover:bg-gray-700'>New Window</MenuItem>
            <MenuItem className='bg-light-blue dark:bg-main-dark-bg hover:bg-blue-200 dark:hover:bg-gray-700'>Open...</MenuItem>
            <MenuItem className='bg-light-blue dark:bg-main-dark-bg hover:bg-blue-200 dark:hover:bg-gray-700'><span className=' text-red-600'>Log Out.</span></MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </div>
  );

  return (
    <div className='w-[95%] mx-[2.5%]  backdrop-blur-sm  rounded-full my-[1.25rem] h-[5.5rem] flex items-center justify-between  absolute top-0'>
      <PageHeader />
      <SearchBar />
    </div>
  );
};

export default Header;
