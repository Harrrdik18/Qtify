import React from 'react';
import Button from '../Button/Button'
import Search from '../Search/Search';
import styles from './navbar.module.css'
import logo from '../../assets/logo.png'


const Navbar = () => {
  return (
  
    <nav className={`${styles.navbar}`} style={{ width: '100%' }}>
    <img className={styles.logo} src={logo} alt="Searcsh" />
   <Search placeholder={"Search a album of your choice"}></Search>
   <Button className={styles.feedback}> Give Feedback </Button>
      

    </nav>
  );
};

export default Navbar;
