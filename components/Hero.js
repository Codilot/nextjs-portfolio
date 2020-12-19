import styles from './Hero.module.scss'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <h1 className={styles.hero__title}>
                I build interfaces, <br />
                prototypes and design systems.
            </h1>

            <p className={styles.hero__description}>
                And help your software products grow fast.
            </p>
        </div>
    )
}

export default Hero
