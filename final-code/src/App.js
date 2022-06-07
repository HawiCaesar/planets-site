import { MainNavigation } from './components/MainNavigation';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import './App.css';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState()
  return (
    <div className='container'>
      <nav className='main-navigation'>
        <div className='planets-title'>The Planets</div>
        <div className='main-menu'>
          <div>
            <img src='../assets/icon-hamburger.svg' />
          </div>
        </div>
        {/* inner div show, probably should show or disapper on click */}
        <div className='planet-list'>
          <div>Mercury</div>
          <div>Venus</div>
          <div>Earth</div>
          <div>Mars</div>
          <div>Mercury</div>
          <div>Venus</div>
          <div>Earth</div>
          <div>Mars</div>
        </div>
      </nav>
      <div className='planet-sub-menu'>
        <div className='overview active-sub-menu'>Overview</div>
        <div className='structure'>Structure</div>
        <div className='surface'>Surface</div>
      </div>
      <div className='planet-picture'>pic</div>
      <div className='planet-description'>description</div>
      <div className='planet-footer'>footer</div>
    </div>
  );
}

export default App;
