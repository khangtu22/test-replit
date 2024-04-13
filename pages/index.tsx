import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
const Home: NextPage = () => {
  const [fact, setFact] = useState(null); // State to store the fetched cat fact

  useEffect(() => {
    const fetchCatFact = async () => {
      try {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        setFact(data.fact); // Extract the fact from the response and update state
      } catch (error) {
        console.error("Error fetching cat fact:", error);
      }
    };

    fetchCatFact(); // Call the fetchCatFact function when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once, on component mount

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cat Fact</h1>
      {fact && <p className={styles.title}>{fact}</p>}
    </div>
  );
};

export default Home;
