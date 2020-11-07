import React, { useState } from 'react';
import Portfolio from '../Portfolio/index'
import Container from 'react-bootstrap/Container'




function AppsList() {

    const [apps] = useState([
        {
            name: 'Words Projects',
            image: 'words-projects.png',
            githubLink: 'https://github.com/NIKO09ES/Words-projects',
            deploy: 'https://word-project1.herokuapp.com/',
            technologies: 'React,MongoDB,Express,GraphQL,JWT,Stripe'
        },
        {
            name: 'Istartist',
            image: 'instartist.jpg',
            githubLink: 'https://github.com/anniavd/Instartist',
            deploy: 'https://instartist.herokuapp.com/',
            technologies: 'Sequelize,Express,MySQL2,Cloudinary,Multer'
        },
        {
            name: 'Tech Blog',
            image: 'tech-blog.jpg',
            githubLink: 'https://github.com/anniavd/Tech-Blog',
            deploy: 'https://developertechblog.herokuapp.com/',
            technologies: 'Express,Handlebars,MySQL,Bcrypt'
        },
        {
            name: 'Shop Shop',
            image: 'shop.jpg',
            githubLink: 'https://github.com/anniavd/shop-shop',
            deploy: 'https://shopshoping.herokuapp.com/',
            technologies: 'React,Boostrap,Express,MongoDB,Bcrypt,Stripe'
        },
        {
            name: 'Book Search Engine',
            image: 'book.jpg',
            githubLink: 'https://github.com/anniavd/Book-Search-Engine',
            deploy: 'https://searchbooks1.herokuapp.com/',
            technologies: 'React,GraphQL,Express,MongoDB,Heroku'
        },
        {
            name: 'Photo Port',
            image: 'photo.jpg',
            githubLink: 'https://github.com/anniavd/photo-port',
            deploy: 'https://anniavd.github.io/photo-port/',
            technologies: 'React,Express,Node'
        },

        {
            name: 'E-commerce',
            image: 'e-commerce.jpg',
            githubLink: 'https://github.com/anniavd/E-commerce',
            deploy: 'https://github.com/anniavd/E-commerce',
            technologies: 'NODE.JS,EXPRESS,MSQL2,SEQUELIZE.DOTENV'
        },

        {
            name: 'Team Members',
            image: 'team-members.jpg',
            githubLink: 'https://github.com/anniavd/team-members',
            deploy: 'https://github.com/anniavd/team-members',
            technologies: 'HTML/CSS,JAVASCRIPT,NODE.JS'
        },
        {
            name: 'Note Taker',
            image: 'note-taker.jpg',
            githubLink: 'https://github.com/anniavd/Note-Taker',
            deploy: 'https://powerful-peak-58251.herokuapp.com/',
            technologies: 'HTML/CSS,JAVASCRIPT,NODE.JS,EXPRESS,HEROKU'
        },
        {
            name: 'Password Generator',
            image: 'password.jpg',
            githubLink: 'https://github.com/anniavd/password-generator',
            deploy: 'https://anniavd.github.io/password-generator/',
            technologies: 'HTML/CSS,JAVASCRIPT'
        },
        {
            name: 'Employee Tracker',
            image: 'employee.jpg',
            githubLink: 'https://github.com/anniavd/Employee-Tracker',
            deploy: 'https://github.com/anniavd/Employee-Tracker',
            technologies: 'NODE.JS,MYSQL'
        },
        {
            name: 'Weather Dashboard',
            image: 'weather.jpg',
            githubLink: 'https://github.com/anniavd/weather-dashboard',
            deploy: 'https://anniavd.github.io/weather-dashboard/',
            technologies: 'HTML/CSS,JAVASCRIPT,BOOTSTRAP'
        },
        {
            name: 'Post Pandemic Dating',
            image: 'project1.png',
            githubLink: 'https://github.com/anniavd/post-pandemic-dating',
            deploy: 'https://anniavd.github.io/post-pandemic-dating/',
            technologies: 'HTML/CSS,JAVASCRIPT,JQUERY,MATERIALIZE,APIS'
        },
        {
            name: 'Work Day Scheduler',
            image: 'scheduler.jpg',
            githubLink: 'https://github.com/anniavd/work-day-scheduler',
            deploy: 'https://anniavd.github.io/work-day-scheduler/',
            technologies: 'HTML/CSS, JQUERY,BOOTSTRAP'
        },
        {
            name: 'Code Quiz',
            image: 'code.jpg',
            githubLink: 'https://github.com/anniavd/code-quiz',
            deploy: 'https://anniavd.github.io/code-quiz/',
            technologies: 'HTML/CSS,Javascritp'
        }

    ]);

    return (
        <main>

            <h1>Portfolio</h1>
            <Container>
                <div className="grid">
                    {apps.map((project) => (<Portfolio  {...project} key={project.name} />))}
                </div>
            </Container>
        </main>
    );
};

export default AppsList;