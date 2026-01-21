import React from 'react'
import Search from './Search';
import Logo from './Logo';
import Numresult from './Numresult';

export default function NavBar({movies, query, setQuery}) {
    
  return (
    <nav className="nav-bar">
      <Logo />
      <Search query={query} setQuery={setQuery}/>
      <Numresult movies={movies} />
    </nav>
  );
}
