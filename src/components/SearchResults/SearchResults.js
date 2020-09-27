import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';
import Card from '../Card/Card.js';
import Container from '../Container/Container';

class SearchResults extends React.Component {

    static propTypes = {
      cards: PropTypes.array,
    }

    render() {
      const {cards} = this.props;
      return (
        <Container>
          <section className={styles.component}>
            <h3 className={styles.title}>Search Results</h3>
            {cards.map(CardData => (
              <Card key={CardData.id} {...CardData} />
            ))}
          </section>
        </Container>
      );
    }
}

export default SearchResults;