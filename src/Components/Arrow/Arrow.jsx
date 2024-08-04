import arrow from "./../../image/uparrow_102651.svg"
import styles from "./Arrow.module.css"

function Arrow () {
    return (
        
            <a href="#about" className={styles.arrow}>
            <img  src={arrow}/>
            </a>
    )
}

export default Arrow