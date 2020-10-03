import React, { useState } from 'react';
import  Portfolio from '../Portfolio/index'


function AppsList(){

    const [apps] = useState([
        {
            id:1,
            name: 'Istartist',
            image:'instartist.jpg',
            githubLink: 'https://instartist.herokuapp.com/" target="_blank',
            deploy: `https://instartist.herokuapp.com/" target="_blank`,
            description: 'Instartist is a social media application for virtually exhibiting  works created by artists',
            technologies: 'Sequelize,Express,MySQL2, Cloudinary,Multer'
        },
        {
            id:2,
            name: 'E-commerce',
            image:'annia.jpg',
            githubLink: 'commercial',
            deploy: `https://instartist.herokuapp.com/" target="_blank`,
            description: 'Instartist is a social media application for virtually exhibiting  works created by artists',
            technologies: 'Sequelize,Express,MySQL2, Cloudinary,Multer'
        }

    ]);

    return (
        <main>
              <div>              
                   {apps.map((project) => (<Portfolio  testProject='testproject' {...project} key={project.id}/>))}
               </div>            
        </main>
    );
};

export default AppsList;