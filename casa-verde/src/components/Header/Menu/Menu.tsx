import styles from './style.module.scss'

export function Menu() {
   return(
      <nav className="menu">
         <ul className={styles['menu__list']}>
            <li className={styles['menu__item']}>
               <a href="#" className={styles['menu__link']}>Como fazer</a>
            </li>
            <li className={styles['menu__item']}>
               <a href="" className={styles['menu__link']}>Ofertas</a>
            </li>
            <li className={styles['menu__item']}>
               <a href="" className={styles['menu__link']}>Depoimentos</a>
            </li>
            <li className={styles['menu__item']}>
               <a href="" className={styles['menu__link']}>Vídeos</a>
            </li>
            <li className={styles['menu__item']}>
               <a href="" className={styles['menu__link']}>Meu Carrinho</a>
            </li>
         </ul>
      </nav>
   )
}