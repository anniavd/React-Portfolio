import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

//<i class="fas fa-code"></i>
function Navegation(props) {

  const tabs = ['About', 'Portfolio','Resume'];
 
 
  return (
    <header className="navegation">
      <h2 ><FontAwesomeIcon icon={faCode}  style={{fontSize:'20px'}}/>
        Annia Valdes
     </h2>
  <nav>
  <ul >
      {tabs.map(tab => (
        <li  key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.setCurrentPage(tab)}
            className={
              props.currentPage === tab ? 'navActive' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
      </nav>
    </header>

  );
}

export default Navegation;







