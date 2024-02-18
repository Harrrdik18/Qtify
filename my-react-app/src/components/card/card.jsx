import React from 'react';
import styles from "./card.module.css";

const Card = ({ title, cover, follows }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <div className={styles.inner}>
                    <img className={styles.cardimg} src={cover} alt={`Album cover for ${title}`} />
                    <section>
                        <h3>{follows} followers </h3>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Card;
