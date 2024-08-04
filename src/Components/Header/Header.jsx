import styles from "./Header.module.css"
import Burger from "../Burger/Burger";

function Header ({index}) {

    let array = [
    <a href="#about">Обо мне</a>,
    <a href="#skills">Навыки</a>, 
    <a href="#projects">Проекты</a>,
    <a href="#education">Образование</a>,
    <a href="#contacts">Контакты</a>
    ]

    return (
        <div className={styles.header}>
            <div className={styles.list}>{array.slice(index).map(el => el)}
            </div>
            <Burger/>
        </div>
    )
}

export default Header