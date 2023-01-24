import styles from 'styles/pc5.module.css'

export default function Hero () {
  return (
    <>

      <div className={styles.pc}>
        <div className={styles.pc_head}>
          <div className={styles.display_outer}>
            <div className={styles.display_inner} />
            <div className={styles.camera} />
          </div>
        </div>
        <div className={styles.pc_body}>
          <div className={styles.body_inner}>
            <div className={styles.hollow} />
          </div>
        </div>
      </div>

    </>
  )
}
