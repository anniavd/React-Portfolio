import React from 'react';
import  Skills from '../skills/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
//<i class="fas fa-file-alt"></i>

function Resume() {

   const others=['Analysis and Design of the Software'];

	const front = [
		'HTML 5',
		'CSS 3',
		'jQuery',
		'Javascript',
		'React',		
		'Bootstrap',
		'Materialize',		
		'Responsive design',
		'ApisResful',
                
	];

	const back = [
		'Node.js',
		'Express.js',
		'MySQL',
		'NoMySQl',
		'Sequelize ORM',
		'MongoDB',
		'Mongoose',
		
    ];
    

	return (
        <main>
		<div className="resume" >
			<h2>
				See the Resume {' '}
				<a	href="https://docs.google.com/document/d/1gQVMJ_44nAI9LxOkditZbVPTkwUpZovGTGVlQDBMLgw/edit?usp=sharing"   rel="noopener noreferrer"	target="_blank"	><FontAwesomeIcon icon={faFile} /></a>
			</h2>
			<h3>Front-end Skills</h3>
			<ul  className="elemtSkill">{front.map((fbend) => <Skills  fbend={fbend} key={fbend}/>)}</ul>	
			<h3>Back-end Skills</h3>
			<ul>{back.map((fbend) => <Skills fbend={fbend} key={fbend}  />)}</ul>	
			<h3>Others Skills</h3>
			<ul>{others.map((fbend) => <Skills fbend={fbend} key={fbend}  />)}</ul>	
		</div>
        </main>
	);
}

export default Resume;