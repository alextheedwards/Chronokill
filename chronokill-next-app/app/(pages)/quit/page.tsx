"use client";
import React from "react";
import styles from "././styles.module.css";
import { Header, Button } from "../../components";

const QuitPage = () => {
  return (
    <div>
      <div className={styles.bg}></div>
      <Header showBackButton={false} />
      <div className={styles.rectangle}>
        <h1 className={styles.h1}></h1>
        <h1 className={styles.h1}>QUIT</h1>
        <form>
          <p className={styles.p}> Are you sure you want to quit! </p>
          <Button href="https://www.google.co.uk/"> Yes</Button>
          <Button href="../mainmenu">No</Button>
        </form>
      </div>
    </div>
  );
};

export default QuitPage;
