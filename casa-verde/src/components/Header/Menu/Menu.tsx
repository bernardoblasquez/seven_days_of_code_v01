import styles from './style.module.scss'

export function Menu() {
   return(
      <nav className="">
         <ul className={styles['menu-list']}>
            <li><a href="">Como fazer</a></li>
            <li><a href="">Ofertas</a></li>
            <li><a href="">Depoimentos</a></li>
            <li><a href="">Vídeos</a></li>
            <li><a href="">Meu Carrinho</a></li>
         </ul>
      </nav>
   )
}