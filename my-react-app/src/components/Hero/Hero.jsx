// Hero component
import React from 'react';
import Heros from '../../assets/Hero.png';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div>
                <h1>100 Thousand Songs, ad-free</h1> 
                <h1>Over thousands podcast episodes</h1>
            </div>
            <img className={styles.heroImage} src={Heros} alt="hero img"/>
        </div>
    );
};

export default Hero;
