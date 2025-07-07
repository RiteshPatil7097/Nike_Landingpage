import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navigation from './component/Navigation';
import './App.css'
import Hero from './component/Hero';

const App= ()=>{

    return <div>
        <Navigation />
        <Hero/>
    </div>
};

export default App;
