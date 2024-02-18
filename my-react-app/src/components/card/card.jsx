import React from 'react';
import styles from "./card.module.css";

const Card = ({ title, cover, follows }) => {
    return (
        <div className={`${styles.cardContainer} ${follows > 100 ? 'top-album-card' : 'new-album-card'}`}>
            <div className={styles.card}>
                <div className={styles.inner}>
                    <img className={styles.cardimg} src={cover} alt={`Album cover for ${title}`} />
                    <div className={styles.content}>
                        <h3 className={styles.followers}>{follows} followers</h3>
                    </div>
                </div>
            </div>
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>{title}</h3>
            </div>
        </div>
    );
}

export default Card;
