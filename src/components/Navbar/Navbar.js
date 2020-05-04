import React from 'react';

import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
 
        return (
          <>
            <nav>
              <NavLink to='/'>Home</NavLink>
              {isLoggedIn ? (
                <>
                  <NavLink to='/private'>Private</NavLink>
                  <button >Logout</button>
                </>
              ) : (
                <NavLink to='/signup-page'>Signup</NavLink>
              )}
            </nav>
          </>
        );
      }}
    </>
  );
}