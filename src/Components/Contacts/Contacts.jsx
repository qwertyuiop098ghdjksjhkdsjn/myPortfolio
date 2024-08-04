import React from "react"
import Headline from "../Headline/Headline";
import styles from "./Contacts.module.css";


const Contact = React.forwardRef((props, ref) => { 
    return(
        <div id="contacts" className={styles.contact}>
            <div ref={ref} className={styles.invisible}></div>
            <Headline text={"CONTACTS"}/>
            <h1 className={styles.contsctsHeadline}>CONTACTS</h1>
            <div className={styles.contacts}>
                <p>В поисках интересных предложений и проектов!</p>
                <a target="_blank" href="https://t.me/iistsn">tg: @iistsn</a>
                <a target="_blank" href="mailto:anastasia.spasova@mail.ru">e-mail: anastasia.spasova@mail.ru</a>
                <a target="_blank" href="https://github.com/qwertyuiop098ghdjksjhkdsjn">github: github</a>
            </div>
        </div>
    )
})

export default Contact