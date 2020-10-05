import React, { useState } from 'react';
import About from './components/About';
import Navegation from './components/Navegation';
import Footer from './components/Footer';
import Contact from './components/Contact';
import AppsList from './components/AppsList';
import Resume from './components/Resume';


function App() {

  
const [currentPage,setCurrentPage]=useState('About')
  const renderPage=()=>{
    switch(currentPage){
      case 'Portfolio': return <AppsList/>;
      case 'Contact':return <Contact/>;
     case 'Resume': return <Resume/>;
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
