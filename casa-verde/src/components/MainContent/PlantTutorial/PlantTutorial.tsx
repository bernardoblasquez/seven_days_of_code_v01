import styles from './style.module.scss'

export function PlantTutorial() {
   return(
      <section className={styles.tutorial}>         
         <div className={styles["tutorial__plant-steps"]}>
            <h1 className={styles["tutorial__title"]}>
               Como conseguir
               <span className={styles["tutorial__main-title"]}>minha planta</span></h1>
            <ul className={styles.tutorial__list}>
               <li className={styles["tutorial__list-item"]}>Escolha suas plantas</li>
               <li className={styles["tutorial__list-item"]}>Faça seu pedido</li>
               <li className={styles["tutorial__list-item"]}>Aguarde na sua casa</li>
            </ul>
         </div>
         <div className={styles["tutorial__plant-image"]}></div>
         
      </section>
   )
} 