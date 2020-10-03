import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import About from './components/About';
import Navegation from './components/Navegation';
import Footer from './components/Footer';
import Contact from './components/Contact';
import AppsList from './components/AppsList';


function App() {

  
const [currentPage,setCurrentPage]=useState('About')
  const renderPage=()=>{
    switch(currentPage){
      case 'Portfolio': return <AppsList/>;
      case 'Contact':return <Contact/>;
     // case 'Resume': return <Resume/>;
      default: return <About/>
    }
  }

  return (
    <div>
     <Navegation currentPage={currentPage} setCurrentPage={setCurrentPage}/>
     {renderPage()}
     <Container>
     <main >
     <Footer></Footer>
     </main>
     </Container>
    </div>
  );
}

export default App;
