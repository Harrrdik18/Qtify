import React from 'react';
import styles from "./Search.module.css";
import searchIcon from "../../assets/Search-icon.svg";

const Search = ({ placeholder }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form className={styles.wrapper} onSubmit={onSubmit}>
            <input className={styles.search} required placeholder={placeholder} />
            <button className={styles.SearchButton} type="submit">
               <img className={styles.srch} src={searchIcon} alt="Searcsh" /> {/* Use the imported SVG as an image */}
            </button>
        </form>
    );
};

export default Search;
