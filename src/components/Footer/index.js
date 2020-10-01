import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import{ faGithubSquare} from '@fortawesome/free-brands-svg-icons';





function Footer() {
    return (
        <section>
            <div className="footer">
                <ul>
                    <li> <a href=" https://www.linkedin.com/in/annia-valdes-diaz-77b2591a8/" target="_blank" style={{fontSize:'40px',color:'orange'}}><FontAwesomeIcon icon={faLinkedin}  /></a>  </li>
                    <li> <a href=" https://github.com/anniavd?tab=repositories" target="_blank" style={{fontSize:'40px',color:'orange'}}><FontAwesomeIcon icon={faGithubSquare} /> </a> </li>
                </ul>
            </div>
        </section>
    )
}

export default Footer;