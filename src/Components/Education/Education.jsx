import Headline from "../Headline/Headline"
import styles from "./Education.module.css"
import React from "react"
import photo from "./../../image/certificate.jpg"

const Education = React.forwardRef((props, ref) => { 
    return (
        <div id="education" className={styles.block}>
            <h1 className={styles.education}>EDUCATION</h1>
            <div ref={ref} className={styles.invisible}></div>
            <Headline text={"EDUCATION"}/>
            <div className={styles.block2}> 
                <img className={styles.photo} src={photo}/>
            </div>
        </div>
    )
})

export default Education