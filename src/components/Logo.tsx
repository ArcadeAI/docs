
import styles from "./Logo.module.css";

export function Logo() {
    return (
        <div className={styles.logo}>
            <img
                src={"/images/logo/arcadeai-title-dark.png"}
                alt="Arcade AI Logo"
            />
        </div>
    );
}


