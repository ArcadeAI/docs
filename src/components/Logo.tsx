
import styles from "./Logo.module.css";

export function Logo() {
    return (
        <div className={styles.logo}>
            <img
                className={"dark:hidden"}
                loading="lazy"
                src={"/images/logo/arcade-ai-logo.png"}
                alt="Arcade AI Logo"
            />
            <img
                className={"hidden dark:block"}
                loading="lazy"
                src={"/images/logo/arcadeai-title-dark.png"}
                alt="Arcade AI Logo"
            />
        </div>
    );
}


