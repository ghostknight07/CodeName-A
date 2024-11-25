// css module file is an isolated file that has no
// effect on other elements not even the classes or ids
import styles from './NotFound.module.css';

export default function NotFound(){
  return (
    <div className={styles['notfound']}>
      <h1 className={styles['not-found-main-text']}>404</h1>
      <h1 className={styles['not-found-header-text']}>Page Not Found</h1>
      <p className={styles['not-found-p']}>Take me back to the <a className={styles['not-found-a']} href='/'>Home</a>  page</p>
    </div>
  )
}
