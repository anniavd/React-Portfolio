import React from 'react';
import  Skills from '../skills/index';

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
		'NODE.js',
		'Express.js',
		'MySQL',
		'NoMySQl',
		'Sequelize ORM',
		'MongoDB',
		'Mongoose',
		
    ];
    

	return (
        <main>
		<div className="Resume" id="cv">
			<h2>
				Download the Resume {' '}
				<a	href="https:"   rel="noopener noreferrer"	target="_blank"	>Here</a>
			</h2>
			<h3>Front-end Skills</h3>
			<ul  className="elemtContact">{front.map((fbend) => <Skills  fbend={fbend} key={fbend}/>)}</ul>	
			<h3>Back-end Skills</h3>
			<ul>{back.map((fbend) => <Skills fbend={fbend} key={fbend}  />)}</ul>	
			<h3>Others Skills</h3>
			<ul>{others.map((fbend) => <Skills fbend={fbend} key={fbend}  />)}</ul>	
		</div>
        </main>
	);
}

export default Resume;