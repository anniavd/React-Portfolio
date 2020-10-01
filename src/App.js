import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {

  const [categories] = useState([
    
    { name: "About me"},        
    { name: "Portfolio"},
     { name: "Contact"},
     { name: "Resume"},        
     
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false); //single-page application



  return (
    <div >
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
     <main>             
       <About></About>
     </main>
     <Footer></Footer>
    </div>
  );
}

export default App;
