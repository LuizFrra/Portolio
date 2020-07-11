import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import ThemeSetup from './Components/ThemeSetup';
import Intro from './Components/Intro';
import About from './Components/About';
import Experience from './Components/Experience';
import Synchro from './imgs/Synchro.png';
import Ufpb from './imgs/ufpb.png';
import SkillsLogo from './Components/SkillsLogo';
import Form from './Components/Form';

const experiences = [
  {
    dateWork: '2020/Feb - Currently',
    enterpriseAndJob: 'Synchro Solução Fiscal - Intern',
    logo: Synchro,
    current: true
  },
  {
    dateWork: '2019/Feb - 2019/Sep',
    enterpriseAndJob: 'UFPB - Monitor Of Database Discipline',
    logo: Ufpb,
    current: false
  }
];

const tabs = ['Contact', 'Experience', 'About'];

const labelsName = ['Name', 'Email', 'Message'];

function App() {

  const [ option, setOption ] = useState(2);

  function handleNavOption(value) {
    setOption(value);
    console.log(value);
  }

  return (
    <div className="App">
      <ThemeSetup>
        <NavBar option={option} selectedOptionChanged={handleNavOption} id="navbar" tabsOptions={tabs} />
        <Intro id="about" name={'Luiz Ferreira'} gitLink={'https://github.com/LuizFrra'} />
        <About />
        <Experience experiences={experiences} skills={SkillsLogo} id="experience" />
        <Form id="contact" labelsName={labelsName} />
      </ThemeSetup>
    </div>
  );
}

export default App;
