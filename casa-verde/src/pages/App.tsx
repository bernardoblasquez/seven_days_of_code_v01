import React from 'react';
import { Header } from "../components/Header/Header"
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.site}>
      <Header />
    </div>
  );
}

export default App;
