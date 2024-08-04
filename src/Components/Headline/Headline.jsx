import styles from "./Headline.module.css"

function Headline ({text, big=false}) {
    return (
        <div className={styles.Headline + " " + (big ? styles.HeadlineBig : "") } >
            <span>
                {text}
            </span>
        </div>
    )
}

export default Headline