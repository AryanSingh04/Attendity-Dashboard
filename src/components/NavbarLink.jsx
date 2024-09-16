import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLink = ({ icon: Icon, text, isActive, to }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => `p-2 rounded-md flex items-center gap-2 transition-colors duration-300 ${isActive ? 'bg-blue-200 text-blue-600' : 'bg-gray-200 text-black'}`}
    >
      {/* Render the icon component */}
      <Icon className={`text-xl ${isActive ? 'fill-blue-600' : 'fill-black'}`} />
      {text}
    </NavLink>
  );
};

export default NavbarLink;
