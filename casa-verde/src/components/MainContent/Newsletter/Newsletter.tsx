import styles from './style.module.scss'

export function Newsletter (){
   return (
      <section className={styles["newsletter"]}>
         <h2 className={styles["newsletter__title"]}>
               
            Sua casa com as
            <span className={styles["newsletter__main-title"]}>
               melhores plantas
            </span>
            
         </h2>
         <p className={styles["newsletter__description"]}>
         Encontre aqui uma vasta seleção de plantas para decorar a 
         sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. 
         Entre com seu e-mail e assine nossa newsletter para saber 
         das novidades da marca.
         </p>
         <form action="" className={styles["newsletter__subscribe-form"]}>
            <input 
               type="text"
               placeholder="Insira seu e-mail"
               className={styles["newsletter__input"]} 
            />
            <button className={styles["newsletter__button"]}>Assinar newsletter</button>
         </form>

      </section>
   )
}