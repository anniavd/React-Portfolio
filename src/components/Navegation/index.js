import React from 'react';


function Navegation(props) {

  const tabs = ['About', 'Portfolio', 'Contact','Resume'];
 
 
  return (
    <header className="navegation">
      <h2>
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







