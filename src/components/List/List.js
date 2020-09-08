import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';

class List extends React.Component {
  static PropTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
  }
  render() {
    return (
      <section className ={styles.component}>
       <Hero titleText={this.props.title} />
       <div className={styles.description}>
        {this.props.children}
       </div>
      </section>
    )
  }
}

export default List;
