import React from 'react';
import Heros from '../../assets/Hero.png'
import styles from './Hero.module.css'


const Hero = () => {
    return <div>
        <img className={styles.hero} src={Heros} alt="hero img"/>

    </div>;
}


export default Hero;