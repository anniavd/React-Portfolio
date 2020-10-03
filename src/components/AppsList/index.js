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
            deploy: `https://instartist.herokuapp.com/" target="_blank`,
            description: 'Instartist is a social media application for virtually exhibiting  works created by artists',
            technologies: 'Sequelize,Express,MySQL2, Cloudinary,Multer'
        }

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