import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {Accueil} from "./Pages/Accueil";

function App() {
  return (
   <div className="App">
     <Routes>
       <Route index element={<Accueil />} />
       <Route path="/recherche" element={<> Page de recherche </>} />
     </Routes>
   </div>
  );
}

export default App;
