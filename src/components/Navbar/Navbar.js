import React from 'react';
import NavbarCss from './navbar.css';



export default function Navbar() {
  return (
    <>
      
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                  <a class="navbar-brand" href="#">DealerSoft</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Inventory</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Finance</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Special Offers</a>
                      </li>
                    </ul>
                   
                  </div>
                </nav>
       
    </>
  );
}