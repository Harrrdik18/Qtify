import React from 'react';
import Button from '../Button/Button'
import Search from '../Search/Search';
import styles from './navbar.module.css'
import logo from '../../assets/Q-tify.svg'


const Navbar = () => {
  return (
  
    <nav className={styles.navbar}>
    <img className={styles.logo} src={logo} alt="Searcsh" />
   <Search placeholder={"Search a album of your choice"}></Search>
   <Button className={styles.feedback}> Give Feedback </Button>
      

    </nav>
  );
};

export default Navbar;
