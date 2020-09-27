import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {searchNavResults} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: searchNavResults(state, props.match.params.title),
});

export default connect(mapStateToProps)(SearchResults);