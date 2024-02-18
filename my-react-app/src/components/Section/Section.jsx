import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../card/card';
import styles from "./Section.module.css"; // Importing and assigning styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Section = ({ title }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
      // Fetch data from API endpoint
      axios.get('https://qtify-backend-labs.crio.do/albums/top')
          .then(response => {
              // Limit the number of albums fetched to 12
              const limitedAlbums = response.data.slice(0, 12);
              setAlbums(limitedAlbums);
          })
          .catch(error => {
              console.error('Error fetching data:', error);
          });
  }, []);

  return (
      <div className={styles.section}> {/* Using styles.section for the class name */}
          <div className={styles.heading}> {/* Using styles.heading for the class name */}
              <h2>{title}</h2>
              <button className={styles.collapseButton} onClick={() => console.log('Collapse button clicked')}>Collapse</button>
          </div>
          <div className="row">
              {albums.map(album => (
                  <div className="col-md-2 mb-4" key={album.id}> {/* Removed mb-5 class */}
                      <Card title={album.title} follows={album.follows} artist={album.artist} cover={album.image} />
                  </div>
              ))}
          </div>
      </div>
  );
}

export default Section;
