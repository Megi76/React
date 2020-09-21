import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import { settings } from '../../data/dataStore';


class Column extends React.Component {
    state = {
      cards:this.props.cards || [],
    }
    static propTypes = {
      title:PropTypes.node.isRequired,
      cards:PropTypes.array,
      icon: PropTypes.node,
      addCard: PropTypes.func,
    }
    static defaulProps = {
      icon: settings.defaultColumnIcon,
    }
    render () {
      const {title, icon, cards, addCard} = this.props;
      return (
        <section className = {styles.component}>
          <h3 className= {styles.title}>{title}
            <span className={styles.icon}>
              <Icon name={icon} />
            </span>
          </h3>
          <div>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} /> ))}
          </div>
          <div>
            <Creator text={settings.cardCreatorText} action={addCard} />
          </div>

        </section>
      );
    }
}

export default Column;