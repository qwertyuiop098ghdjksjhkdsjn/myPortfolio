import { useState } from "react"
import styles from "./Burger.module.css"

function Burger () {

    const [opened, setOpened] = useState(false);

    function onClick () {
        setOpened(!opened)
    }

    let array = [
        <a href="#about">Обо мне</a>,
        <a href="#skills">Навыки</a>, 
        <a href="#projects">Проекты</a>,
        <a href="#education">Образование</a>,
        <a href="#contacts">Контакты</a>
        ]

    return(
        <div className={styles.burger}>
            <button className={styles.burgerButton} onClick={onClick}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            {opened && <div className={styles.burgerWrapper}>
               <div onClick={onClick} className={styles.list}>{array.map(el => el)}</div> 
            </div>}
        </div>
    )
}

export default Burger