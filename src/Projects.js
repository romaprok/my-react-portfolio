import React from 'react';
import styles from './Projects.module.css';

function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.works}>Мои работы</div>
        <div className={styles.projectsMain}>
          <div className={styles.mainFirst}>
            <div className={styles.firstTop}></div>
            <div className={styles.firstBottom}></div>
          </div>
          <div className={styles.mainSecond}>
            <div className={styles.secondTop}>
              <button>Смотреть</button>
            </div>
            <div className={styles.secondBottom}>
              <div>Название проекта</div>
              <div className={styles.bottomDescription}>
                Краткое описание</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Projects;
