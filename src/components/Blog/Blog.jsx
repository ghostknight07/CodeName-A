import styles from './Blog.module.css';
import { FaClock } from "react-icons/fa";
import PropTypes from 'prop-types';

export default function Blog({ authorName, blogTitle, blogDescription, pubDate, blogImage }) {
    return (
        <div className={styles.blogContainer} id="blog">
            <div className={styles.blogImage}>
                {/* If no blogImage, display a placeholder image */}
                <img
                    src={blogImage} 
                    alt={blogTitle}
                />
            </div>
            <div className={styles.blogInfo}>
                <div className={styles.blogTypeContainer}>
                    <h3 className={styles.blogType}>{'Movie Review'}</h3>  {/* Static or dynamic */}
                </div>

                <a href="#"><h2 className={styles.blogTitle}>{blogTitle}</h2></a>
                <br />

                <p className={styles.blogDescription} id="blogDescription">
                    {blogDescription}
                </p>

                <div className={styles.extraInformation}>
                    <div><p className={styles.author}>{authorName}</p></div>
                    <div className={styles.dateContainer}>
                        <FaClock />
                        <p className={styles.date}>{pubDate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Default props
Blog.defaultProps = {
  authorName: "Author Name",
  blogTitle: "Blog Title",
  blogDescription: "Blog Description",
  pubDate: "Publish Date",
  blogImage: "default-image-path.jpg",
};

// Prop validation
Blog.propTypes = {
  blogTitle: PropTypes.string.isRequired,
  blogDescription: PropTypes.string.isRequired,
  authorName: PropTypes.string,
  pubDate: PropTypes.string.isRequired,
  blogImage: PropTypes.string,
};

