import React, { useState } from 'react';
import About from './components/About';
import Navegation from './components/Navegation';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {

 /* const [categories] = useState([
    
    { name: "About me"},        
    { name: "Portfolio"},
     { name: "Contact"},
     { name: "Resume"},        
     
  ]);*/
  
 

  //const [currentCategory, setCurrentCategory] = useState(categories[0]);
 // const [contactSelected, setContactSelected] = useState(false); //single-page application

const [currentPage,setCurrentPage]=useState('About')
  const renderPage=()=>{
    switch(currentPage){
     // case 'Portfolio': return <Portfolio/>;
      case 'Contact':return <Contact/>;
     // case 'Resume': return <Resume/>;
      default: return <About/>
    }
  }

  return (
    <div>
     <Navegation currentPage={currentPage} setCurrentPage={setCurrentPage}/>
     {renderPage()}
     <Footer></Footer>
    </div>
  );
}

export default App;
