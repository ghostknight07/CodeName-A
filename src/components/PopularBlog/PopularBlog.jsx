import styles from './PopularBlog.module.css';

export default function popularBlog({ blogTitle, blogImage, authorName }) {
  return (
    <div className={styles.popularBlogContainer}>
      <div className={styles.imgDiv}><img src={blogImage} alt={blogTitle} /></div>
      <div className={styles.infoDiv}>
        <div>
        <h3 className={styles.title}>{blogTitle}</h3>
        </div>
        <div className={styles.date}>
          <div>
            <p>{authorName}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
