import React from 'react';
import { MainContent } from '../components/MainContent/MainContent'
import { Header } from "../components/Header/Header"
import { PlantSales } from '../components/PlantSales/PlantSales'
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.site}>
      <Header />
      <MainContent />
      <PlantSales />
    </div>
  );
}

export default App;
