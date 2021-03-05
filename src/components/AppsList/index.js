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
            technologies: 'Sequelize,Express,MySQL2,Cloudinary'
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
            technologies: 'React,GraphQL,Express,MongoDB'
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
            technologies: 'Node,Express,MySQL,Sequelize'
        },

        {
            name: 'Team Members',
            image: 'team-members.jpg',
            githubLink: 'https://github.com/anniavd/team-members',
            deploy: 'https://github.com/anniavd/team-members',
            technologies: 'Html,Css,Javascrip,Node.js'
        },
        {
            name: 'Note Taker',
            image: 'note-taker.jpg',
            githubLink: 'https://github.com/anniavd/Note-Taker',
            deploy: 'https://powerful-peak-58251.herokuapp.com/',
            technologies: 'Html,Css,Javascrip,Node.js,Express'
        },
        {
            name: 'Password Generator',
            image: 'password.jpg',
            githubLink: 'https://github.com/anniavd/password-generator',
            deploy: 'https://anniavd.github.io/password-generator/',
            technologies: 'Html,Css,Javascrip'
        },
        {
            name: 'Employee Tracker',
            image: 'employee.jpg',
            githubLink: 'https://github.com/anniavd/Employee-Tracker',
            deploy: 'https://github.com/anniavd/Employee-Tracker',
            technologies: 'Html,Css,Javascrip,node.js,MySQL'
        },
        {
            name: 'Weather Dashboard',
            image: 'weather.jpg',
            githubLink: 'https://github.com/anniavd/weather-dashboard',
            deploy: 'https://anniavd.github.io/weather-dashboard/',
            technologies: 'Html,Css,Javascrip,Boostrap'
        },
        {
            name: 'Post Pandemic Dating',
            image: 'project1.png',
            githubLink: 'https://github.com/anniavd/post-pandemic-dating',
            deploy: 'https://anniavd.github.io/post-pandemic-dating/',
            technologies: 'Html,Css,Javascrip,Jquery,Apis,Materialize'
        },
        {
            name: 'Work Day Scheduler',
            image: 'scheduler.jpg',
            githubLink: 'https://github.com/anniavd/work-day-scheduler',
            deploy: 'https://anniavd.github.io/work-day-scheduler/',
            technologies: 'Html,Css,Jquery,Boostrap'
        },
        {
            name: 'Code Quiz',
            image: 'code.jpg',
            githubLink: 'https://github.com/anniavd/code-quiz',
            deploy: 'https://anniavd.github.io/code-quiz/',
            technologies: 'HTML/CSS,Javascritp'
        },
        {
            name: 'Deep Thoughts',
            image: 'thoughts.jpg',
            githubLink: 'https://github.com/anniavd/deep-thoughts',
            deploy: 'https://deepsthought.herokuapp.com/',
            technologies: 'Html,Css,Javascritp,React,MongoDB,Graphql,JWT'
        },
        {
            name: 'Pizza Hunt',
            image: 'pizza.jpg',
            githubLink: 'https://github.com/anniavd/pizza-hunt',
            deploy: 'https://tranquil-refuge-93011.herokuapp.com/',
            technologies: 'Html,Css,Javascritp,Heroku'
        },
        {
            name: 'Zoo Keepr',
            image: 'zoo.jpg',
            githubLink: 'https://github.com/anniavd/zookeepr',
            deploy: 'https://zookeepr1.herokuapp.com/',
            technologies: 'Html,Css,Javascritp,Node,Express,Jest'
        },
        {
            name: 'Git it Done',
            image: 'git-it-done.jpg',
            githubLink: 'https://github.com/anniavd/git-it-done',
            deploy: 'https://anniavd.github.io/git-it-done/',
            technologies: 'Html,Css,Javascritp'
        },
        {
            name: 'Jest RPG',
            image: 'jest.jpg',
            githubLink: 'https://github.com/anniavd/jest-RPG',
            deploy: 'https://github.com/anniavd/jest-RPG',
            technologies: 'Node,Javascritp'
        },
         {
            name: 'Budget Tracker',
            image: 'tracker.jpg',
            githubLink: 'https://github.com/anniavd/budget-tracker',
            deploy: 'https://damp-springs-37599.herokuapp.com/',
            technologies: 'Html,Css,Javascritp,Compression/MongoDB,'
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