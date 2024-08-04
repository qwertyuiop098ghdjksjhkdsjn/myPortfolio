import './App.css';
import Header from "./Components/Header/Header.jsx";
import About from './Components/About/About.jsx';
import Skills from "./Components/Skills/Skills.jsx"
import {useInView} from "framer-motion"
import { useRef, useState } from 'react';
import Education from './Components/Education/Education.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Arrow from './Components/Arrow/Arrow.jsx';
import Contact from './Components/Contacts/Contacts.jsx';

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const education = useRef(null);
  const projects = useRef(null);
  const contacts = useRef(null);

  const isAboutInView = useInView(aboutRef);
  const isSkillsInView = useInView(skillsRef);
  const isEducation = useInView(education);
  const isProjects = useInView(projects);
  const isContacts = useInView(contacts);
  
  console.log(isAboutInView, isSkillsInView)

  

  const [index, setIndex] = useState(0);

  function changeIndex () {
    if(window.innerWidth > 900) {
    if (isAboutInView && index !== 0) {
    setIndex(0)
  } else if (isSkillsInView && index !== 1) {
    setIndex(1)
  } else if (isProjects && index !== 2) {
    setIndex(2)
  } else if (isEducation && index !== 3) {
    setIndex(3)
  } else if(isContacts && index !==4) {
    setIndex(4)
  }
}
  }
  

function debounce(func, ms) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}

const func = debounce(changeIndex, 100)

func();

  return (
    <div className="App">
      <Header index={index}/>
      <Arrow/>
      <About ref={aboutRef}/>
      <Skills ref={skillsRef}/>
      <Projects ref={projects}/>
      <Education ref={education}/>
      <Contact ref={contacts} /> 
    </div>
  );
}

export default App;
