import styles from "./About.module.css"
import Headline from "../Headline/Headline";
import photo from "./../../image/photo.jpg";
import React from "react";

const About = React.forwardRef((props, ref) => { 
    return (
        <div id="about" className={styles.block}>
            <div ref={ref} className={styles.invisible}></div>
            <Headline text={"FRONTEND DEVELOPER"}/>
            <div className={styles.text}>
                <p>
                    Я АНАСТАСИЯ, ФРОНТЕНД РАЗРАБОТЧИК.
                    <br></br> <br></br>
                    СОЗДАЮ АДАПТИВНЫЕ ВЕБ-САЙТЫ,
                    ПРОЕКТИРУЮ ИНТЕРФЕЙСЫ И ПОМОГАЮ РЕАЛИЗОВАТЬ ПРОЕКТЫ В ЖИЗНЬ.
                </p>
                <a href="#contacts" className={styles.button}>СВЯЗАТЬСЯ СО МНОЙ</a>
            </div>
            <img className={styles.photo} src={photo} alt="myPhoto"/>
        </div>
    )
})

export default About