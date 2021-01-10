import react from 'react';

export default function Header(){
    return(
        <header id="header">
        <div class="container">
    
          <div class="logo float-left">
           <img width="200px" src="https://darna.tn/wp-content/uploads/logo-darna1.png" alt=""/>
            
            <a href="index.html"></a>
          </div>
    
          <nav class="nav-menu float-right d-none d-lg-block">
            <ul>
              <li class="active"><a href="index.html">Accueil</a></li>
              <li><a href="#about">A propos Darna</a></li>
              <li><a href="#services">Nous Aider</a></li>
              <li><a href="#services">Nos Projets</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="http://www.donbyuib.com.tn/darna.html">Donation</a></li>
              <li class="drop-down"><a href="">Drop Down</a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li class="drop-down"><a href="#">Drop Down 2</a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                  <li><a href="#">Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>
    
        </div>
      </header>
    )
}