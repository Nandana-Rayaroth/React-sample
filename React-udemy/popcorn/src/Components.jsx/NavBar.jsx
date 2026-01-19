import React from 'react'
import Search from './Search';
import Logo from './Logo';
import Numresult from './Numresult';

export default function NavBar({movies}) {
    
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <Numresult movies={movies} />
    </nav>
  );
}
