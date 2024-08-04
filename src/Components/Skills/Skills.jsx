import Headline from "../Headline/Headline";
import photo from "./../../image/computer.png"
import styles from "./Skills.module.css"
import photo2 from "./../../image/photo2.jpg"
import React from "react";
import skills from "../../image/skills.png"


const Skills = React.forwardRef((props, ref) => {
    return (<div id="skills" className={styles.main}>
            <div ref={ref} className={styles.invisible}></div>
            <Headline text={"HARD SKILLS"}/>
            <h1 className={styles.skillHeadline}>SKILLS</h1>
            <div className={styles.all}>
            <p className={styles.skills}>JAVASCRIPT, TYPESCRIPT, REACT, REDUX-TOOLKIT, HTML, CSS, SCSS, JSON, API, GIT, FIGMA, UNIT TESTING</p>
            <img className={styles.photo1} src={photo}/>    
            </div>
            <img className={styles.photo2} src={photo2}/>
            <img className={styles.skillsPhoto} src={skills}/>
        </div>)
  });

export default Skills