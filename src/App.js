import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import ThemeSetup from './Components/ThemeSetup';
import Intro from './Components/Intro';
import About from './Components/About';
import Experience from './Components/Experience';
import SkillsLogo from './Components/SkillsLogo';
import Form from './Components/Form';

const experiences = [
  {
    dateWork: '2020/Feb - Currently',
    enterpriseAndJob: 'Synchro Solução Fiscal - Intern',
    logoWebp: require('./imgs/Synchro/Synchro.webp'),
    logoJp2: require('./imgs/Synchro/Synchro.jp2'),
    logoPng: require('./imgs/Synchro/Synchro.png'),
    current: true
  },
  {
    dateWork: '2019/Feb - 2019/Sep',
    enterpriseAndJob: 'UFPB - Monitor Of Database Discipline',
    logoWebp: require('./imgs/ufpb/ufpb.webp'),
    logoJp2: require('./imgs/ufpb/ufpb.jp2'),
    logoPng: require('./imgs/ufpb/ufpb.png'),
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
        <Intro id="about" name={'Luiz Ferreira'} gitLink={'https://github.com/LuizFrra'} linkedin={'https://www.linkedin.com/in/luiz-ferreira-34212015b/'}/>
        <About />
        <Experience experiences={experiences} skills={SkillsLogo} id="experience" />
        <Form id="contact" labelsName={labelsName} />
      </ThemeSetup>
    </div>
  );
}

export default App;
