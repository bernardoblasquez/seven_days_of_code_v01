import { Newsletter } from './Newsletter/Newsletter'
import { PlantTutorial } from './PlantTutorial/PlantTutorial';
import styles from './style.module.scss';


export function MainContent (){
   return(
      <main className={styles['mainContent-site']}>
         <Newsletter />
         <PlantTutorial />
      </main>
   )
} 