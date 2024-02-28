import React, { useEffect, useState } from "react";
import Navbar from "./components/nav/navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import SongsSection from "./components/Songs/SongSection";
import fetchApi from "./api/api";
import styles from "./App.module.css";

const App = () => {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [allSongs, setAllSongs] = useState([]);

  useEffect(() => {
    generateTopAlbums();
    generateNewAlbums();
    generateAllSongs();
  }, []);

  const generateTopAlbums = async () => {
    const data = await fetchApi("/albums/top");
    setTopAlbumsData(data);
    // console.log("TopAlbums>>>>", data);
  };

  const generateNewAlbums = async () => {
    const data = await fetchApi("/albums/new");
    setNewAlbumsData(data);
    // console.log("NewAlbums>>>>", data);
  };

  const generateAllSongs = async () => {
    const data = await fetchApi("/songs");
    setAllSongs(data);
    console.log("All", data);
  };

  return (
    <div>
      <Navbar />
      <div className="hero">
        <Hero className />
      </div>
      <div className={styles.sectionWrapper}>
        <Section title="Top Albums" data={topAlbumsData} type="album" />
        <Section title="New Albums" data={newAlbumsData} type="album" />
        <SongsSection title="Songs" data={allSongs} type="songs" />
      </div>
    </div>
  );
};

export default App;
