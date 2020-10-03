import React, { useState } from 'react';
import  Portfolio from '../Portfolio/index'



function AppsList(){

    const [apps] = useState([
        {
             name: 'Istartist',
            image:'instartist.jpg',
            githubLink: 'https://github.com/anniavd/Instartist',
            deploy: 'https://instartist.herokuapp.com/' ,
            description: 'Instartist is a social media application for virtually exhibiting  works created by artists',
            technologies: 'Sequelize,Express,MySQL2, Cloudinary,Multer'
        },
        {            
            name: 'E-commerce',
            image:'e-commerce.jpg',
            githubLink: 'https://github.com/anniavd/E-commerce',
            deploy: 'https://github.com/anniavd/E-commerce' ,
            description: 'E-commerce is a Back End site where a user or owner of a sales business  can control their products, categories and tags associated with each other.',
            technologies: 'NODE.JS,EXPRESS,MSQL2,SEQUELIZE.DOTENV'
        },
      
        {            
            name: 'Team Members',
            image:'team-members.jpg',
            githubLink: 'https://github.com/anniavd/team-members',
            deploy: 'https://github.com/anniavd/team-members',
            description: 'Team Members is an application through which the user can form a  work team with essential information about its members.',
            technologies: 'HTML/CSS,JAVASCRIPT,NODE.JS'
        },
        {            
            name: 'Note Taker',
            image:'note-taker.jpg',
            githubLink: 'https://github.com/anniavd/Note-Taker',
            deploy: 'https://powerful-peak-58251.herokuapp.com/',
            description: 'Note Taker application is to write notes of any type that the user wants a reminder of their activities.',
            technologies: 'HTML/CSS,JAVASCRIPT,NODE.JS,EXPRESS,HEROKU'
        },
        {            
            name: 'Password Generator',
            image:'weather.jpg',
            githubLink: 'https://anniavd.github.io/password-generator/',
            deploy: 'https://anniavd.github.io/password-generator/',
            description: ' Generate random passwords,following various criteria',
            technologies: 'HTML/CSS,JAVASCRIPT'
        },
        {            
            name: 'Employee Tracker',
            image:'employee.jpg',
            githubLink: 'https://github.com/anniavd/Employee-Tracker',
            deploy:'https://github.com/anniavd/Employee-Tracker', 
            description: 'Application to see the departments, roles and employees in a business, where the information is shown organized',
            technologies: 'NODE.JS, MYSQL2'
        },
        {            
            name: 'Weather Dashboard',
            image:'password.jpg',
            githubLink: 'https://github.com/anniavd/weather-dashboard',
            deploy:'https://anniavd.github.io/weather-dashboard/', 
            description: 'Shows the weather by city. It shows the weather of the day you are in and also the one of 5 days later',
            technologies: 'HTML/CSS,JAVASCRIPT,Bootstrap'
        },

    ]);

    return (
        <main>
              <div>              
                   {apps.map((project) => (<Portfolio  {...project} key={project.name}/>))}
               </div>            
        </main>
    );
};

export default AppsList;