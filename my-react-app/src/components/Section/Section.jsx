import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../card/card';
import styles from "./Section.module.css"; // Importing and assigning styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Carousel from '../Carousel/Carousel';

const Section = ({ title }) => {
  const [albums, setAlbums] = useState([]);
  const [isCarousel, setIsCarousel] = useState(false); // Default to grid view

  const toggleMode = () => {
    setIsCarousel(!isCarousel); // Toggle between carousel and grid mode
  };

  useEffect(() => {
      // Fetch data from API endpoint based on the title
      const apiUrl = title === "Top Albums" ? 'https://qtify-backend-labs.crio.do/albums/top' : 'https://qtify-backend-labs.crio.do/albums/new';
      
      axios.get(apiUrl)
          .then(response => {
              setAlbums(response.data);
          })
          .catch(error => {
              console.error('Error fetching data:', error);
          });
  }, [title]); // Add title as a dependency to re-fetch data when the title changes

  return (
      <div className={styles.section}> {/* Using styles.section for the class name */}
          <div className={styles.heading}> {/* Using styles.heading for the class name */}
              <h2>{title}</h2>
              <button className={styles.collapseButton} onClick={toggleMode}>
                {isCarousel ? 'show all' : 'Collapse'}
              </button>
          </div>
          <div className="row">
              {isCarousel ? (
                  <Carousel albums={albums} />
              ) : (
                  albums.length > 0 && albums.map(album => (
                      <div className="col-md-2 mb-4" key={album.id}>
                          <Card title={album.title}  follows={album.follows} artist={album.artist} image={album.image} />
                      </div>
                  ))
              )}
          </div>
      </div>
  );
}

export default Section;
