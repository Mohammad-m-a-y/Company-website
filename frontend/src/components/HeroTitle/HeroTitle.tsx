 import { Fragment } from 'react';

import styles from './HeroTitle.module.css';


interface HeroTitleProps {
  title: string;
}


function HeroTitle({ title }: HeroTitleProps) {

  const lines = title.split(/\r?\n/);


  return (
    <h1 className={styles.title}>
      {lines.map((line, index) =>
        index === 0 ? (
          <Fragment key={index}>
            {line}
            <br />
          </Fragment>
        ) : (
          <span key={index}>
            {line}
          </span>
        )
      )}
    </h1>
  );
}


export default HeroTitle;
 