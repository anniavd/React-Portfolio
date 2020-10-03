import React, { useState } from 'react';
import  Portfolio from '../Portfolio/index'
import Container from 'react-bootstrap/Container'




function AppsList(){

    const [apps] = useState([
        {
             name: 'Istartist',
            image:'instartist.jpg',
            githubLink: 'https://github.com/anniavd/Instartist',
            deploy: 'https://instartist.herokuapp.com/' ,
            technologies: 'Sequelize,Express,MySQL2,Cloudinary,Multer'
        },
        {            
            name: 'E-commerce',
            image:'e-commerce.jpg',
            githubLink: 'https://github.com/anniavd/E-commerce',
            deploy: 'https://github.com/anniavd/E-commerce' ,
            technologies: 'NODE.JS,EXPRESS,MSQL2,SEQUELIZE.DOTENV'
        },
      
        {            
            name: 'Team Members',
            image:'team-members.jpg',
            githubLink: 'https://github.com/anniavd/team-members',
            deploy: 'https://github.com/anniavd/team-members',
            technologies: 'HTML/CSS,JAVASCRIPT,NODE.JS'
        },
        {            
            name: 'Note Taker',
            image:'note-taker.jpg',
            githubLink: 'https://github.com/anniavd/Note-Taker',
            deploy: 'https://powerful-peak-58251.herokuapp.com/',
            technologies: 'HTML/CSS,JAVASCRIPT,NODE.JS,EXPRESS,HEROKU'
        },
        {            
            name: 'Password Generator',
            image:'weather.jpg',
            githubLink: 'https://anniavd.github.io/password-generator/',
            deploy: 'https://anniavd.github.io/password-generator/',
            technologies: 'HTML/CSS,JAVASCRIPT'
        },
        {            
            name: 'Employee Tracker',
            image:'employee.jpg',
            githubLink: 'https://github.com/anniavd/Employee-Tracker',
            deploy:'https://github.com/anniavd/Employee-Tracker', 
            technologies: 'NODE.JS, MYSQL2'
        },
        {            
            name: 'Weather Dashboard',
            image:'password.jpg',
            githubLink: 'https://github.com/anniavd/weather-dashboard',
            deploy:'https://anniavd.github.io/weather-dashboard/', 
            technologies: 'HTML/CSS,JAVASCRIPT,BOOTSTRAP'
        },

    ]);

    return (
        <main>
              
             <h1>Portfolio</h1>
             <Container>
              <div className="grid">              
                   {apps.map((project) => (<Portfolio  {...project} key={project.name}/>))}
               </div>  
               </Container>          
        </main>
    );
};

export default AppsList;