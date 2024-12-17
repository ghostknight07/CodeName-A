// the props should be blogType, blogTitle, blogDescription, author, date

import styles from './Blog.module.css';
import { FaClock } from "react-icons/fa";
import PropTypes from 'prop-types'

export default function Blog(props) {
    return (
        <div className={styles.blogContainer} id="blog">
            <div className={styles.blogImage}>

                <img
                    src="https://resizing.flixster.com/CENhNm02vedzGtSVWBBSu8rUTrk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p22445405_i_h10_ab.jpg"
                    alt="kraven the hunter"
                />

            </div>
            <div className={styles.blogInfo}>
                <div className={styles.blogTypeContainer}>
                    <h3 className={styles.blogType}>{props.blogType}</h3>
                </div>

                <a href="#"><h2 className={styles.blogTitle}>{props.blogTitle}</h2></a>
                <br />

                <p className={styles.blogDescription} id="blogDescription">
                {props.blogDescription}
                </p>

                <div className={styles.extraInformation}>
                    <div><p className={styles.author}>{props.authorName}</p></div>
                    <div className={styles.dateContainer}>
                        <FaClock />
                        <p className={styles.date}>{props.pubDate}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

// json file must contain an "id" field
// needs to handle blog image props
Blog.defaultProps = {
  authorName: "Author Name",
  blogType: "movie review",
  blogTitle: "blog title",
  blogDescription: "blog description",
  pubDate: "pub date",
};

Blog.propTypes = {
  blogType: PropTypes.string.isRequired,
  blogTitle: PropTypes.string.isRequired,
  blogDescription: PropTypes.string.isRequired,
  authorName: PropTypes.string,
  pubDate: PropTypes.string.isRequired,
};
