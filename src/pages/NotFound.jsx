// css module file is an isolated file that has no
// effect on other elements not even the classes or ids
import styles from './NotFound.module.css';
import Button from '../components/Button/Button.jsx';

function NotFound() {
  return (
    <div className={styles['notfound']}>
      <div className={styles['not-found-content']}>
        <h1 className={styles['not-found-header-text']}>Page Not Found</h1>
        <p className={styles['not-found-p']}>The page you are looking for does not exist</p>
        <a href="/">
          <Button text={"Home"} />
        </a>
      </div>
    </div>
  )
}

export default NotFound;