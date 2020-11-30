import React from 'react';

const Nav = () => {
return (
<nav className="nav">
      <div className="nav-text">
          RECIPE APP
      </div>
      <ul className="ul">
          <li className="li">
            <a className="a" href="https://github.com/nilesjamex/githubprofilefinder"><i class="fab fa-lg fa-github" style={{color: "#24292E"}}></i> </a>
          </li>
          <li className="li">
              <a className="a" href="https://twitter.com/niles_jamex"><i class="fab fa-lg fa-twitter" style={{color: "#1DA1F2"}}></i></a>
          </li>
      </ul>
      
  </nav> 

)

}

export default Nav;