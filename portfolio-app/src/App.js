
import './App.css';

import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Navbar from './Page/Home/Navbar';
import { Home } from './Page/Home/Homescreen';



function App() {
  return (
    <div className="App">
       <Router>

         <div>
           <Navbar/>

           <Routes>
             <Route path='/' element={<Home/>}>

             </Route>
           </Routes>
         </div>
       </Router>



     

    </div>
  );
}

export default App;
