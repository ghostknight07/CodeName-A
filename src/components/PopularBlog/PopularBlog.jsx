import styles from './PopularBlog.module.css';
import { FaClock } from "react-icons/fa";

export default function popularBlog() {
  return (
    <div className={styles.popularBlogContainer}>
      <div className={styles.imgDiv}><img src="https://resizing.flixster.com/pMNfRhpBmFbKV0o71XDVqcXeNmo=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p26812197_v_h9_ad.jpg" alt="" /></div>
      <div className={styles.infoDiv}>
        <div className={styles.blogType}><p>Movie Review</p></div>
        <div>
        <h3 className={styles.title}>Small Things Like These Review: A Quietly Powerful Story</h3>
        </div>
        <div className={styles.date}>
          <div>
            <p>author</p>
          </div>
          <div>
            <FaClock />
            <p>date</p>
          </div>
        </div>
      </div>
    </div>
  )
}
