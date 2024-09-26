import Card from './Card';
import Header from './Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Mobile from './Mobile';



function App() {
 return(
    <>
    <Header />
         <Routes>
            <Route path='/' element={<Card/>} />
            <Route path='/Mobile' element={<Mobile/>}/>
         </Routes>
     </>
 );
}

export default App
