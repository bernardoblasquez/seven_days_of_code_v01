import styles from './style.module.scss';

export function PlantSales (){
   return(
      <section className={styles["plantSales"]}>
         <h2 className={styles["plantSales__title"]}>
            Conheça nossas
            <span className={styles["plantSales__main-title"]}>
               Ofertas
            </span>
         </h2>
         <div className={styles["plantSaleBox"]}>
            <div className={styles["plantSaleBox__item--ajuga"]}>
               <h3 className={styles["plantSaleBox__title"]}>Ajuga Reptans</h3>
               <span className={styles["plantSaleBox__prize"]}>R$ 20,00</span>
               <a href="sdsd" className={styles["plantSaleBox__buy-link"]}>Comprar</a>
            </div>
            <div className={styles["plantSaleBox__item--cordyline"]}>
               <h3 className={styles["plantSaleBox__title"]}>Ajuga Reptans</h3>
               <span className={styles["plantSaleBox__prize"]}>R$ 20,00</span>
               <a href="sdsd" className={styles["plantSaleBox__buy-link"]}>Comprar</a>
            </div>
            <div className={styles["plantSaleBox__item--crassula"]}>
               <h3 className={styles["plantSaleBox__title"]}>Ajuga Reptans</h3>
               <span className={styles["plantSaleBox__prize"]}>R$ 20,00</span>
               <a href="sdsd" className={styles["plantSaleBox__buy-link"]}>Comprar</a>
            </div>
            <div className={styles["plantSaleBox__item--cyperus"]}>
               <h3 className={styles["plantSaleBox__title"]}>Ajuga Reptans</h3>
               <span className={styles["plantSaleBox__prize"]}>R$ 20,00</span>
               <a href="sdsd" className={styles["plantSaleBox__buy-link"]}>Comprar</a>
            </div>
            <div className={styles["plantSaleBox__item--datura"]}>
               <h3 className={styles["plantSaleBox__title"]}>Ajuga Reptans</h3>
               <span className={styles["plantSaleBox__prize"]}>R$ 20,00</span>
               <a href="sdsd" className={styles["plantSaleBox__buy-link"]}>Comprar</a>
            </div>
            <div className={styles["plantSaleBox__item--delairea"]}>
               <h3 className={styles["plantSaleBox__title"]}>Ajuga Reptans</h3>
               <span className={styles["plantSaleBox__prize"]}>R$ 20,00</span>
               <a href="sdsd" className={styles["plantSaleBox__buy-link"]}>Comprar</a>
            </div>
         </div>
      </section>
   )
}