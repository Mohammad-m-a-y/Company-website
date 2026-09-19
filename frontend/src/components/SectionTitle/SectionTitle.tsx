 
import { Fragment } from 'react';

import styles from './SectionTitle.module.css';


interface SectionTitleProps {
  title: string;
  dark: boolean;
}


function SectionTitle({ title, dark }: SectionTitleProps) {

  const lines = title.split(/\r?\n/);


  return (
    <h2 className={dark ? styles.title : styles.light_title}>
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
    </h2>
  );
}


export default SectionTitle;
 