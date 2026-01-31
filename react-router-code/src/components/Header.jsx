import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className="bg-blue-900 flex text-white font-bold  text-2xl navBar">
      <NavLink to="/" className="p-4">
        <span>Home</span>
      </NavLink>
      <NavLink to="users" className="p-4">
        <span>Users</span>
      </NavLink>
      <NavLink to="settings" className="p-4">
        <span>Settings</span>
      </NavLink>
      <NavLink to="usage" className="p-4">
        <span>Usage</span>
      </NavLink>
    </div>
  );
}
