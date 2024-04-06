import React from 'react';
import styles from './loading.module.css';

const Loading = ({height, width}) => {
    return (
        <div id={styles.container}> 
            <span style={{height: height, width: width}} className={styles.loader}></span>
        </div>
    );
}

export default Loading