import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{props.titleText}</h2>
    <img src={props.image} className={styles.image}></img>      
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
}

export default Hero;