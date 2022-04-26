import { Menu } from './Menu/Menu';
import styles from './style.module.scss';
import logo from '../../images/logo.svg'

export function Header() {
   return(
      <header className={styles['header-site']}>
            <img src={logo} alt="site da casa verde" />
            <Menu></Menu>
      </header>
   )
}