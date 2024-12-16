import styles from './Blog.module.css';

function Blog() {
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
                    <h3 className={styles.blogType}>BlogReview</h3>
                </div>

                <a href="#"><h2 className={styles.blogTitle}>Kraven The Hunter Review: A Toothless Roar</h2></a>
                <br />

                <p className={styles.blogDescription} id="blogDescription">Few action thrillers manage to balance high-stakes tension with genuine character development, but Jaume Collet-Serra‘s Carry-On delivers on both fronts. From its opening moments, the narrative ...
                </p>
            </div>
        </div >
    )
}

export default Blog