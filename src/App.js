import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Accueil} from "./Pages/Accueil";
import {Recherche} from './Pages/Recherche'
import {SearchContext} from './Context';
import {useState} from 'react';

function App() {
    return (
        <div className="App">
                <Routes>
                    <Route index element={<Accueil/>}/>
                    <Route path="/recherche" element={<Recherche/>}/>
                </Routes>
        </div>
    );
}

export default App;
