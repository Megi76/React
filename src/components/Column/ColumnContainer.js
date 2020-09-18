import {connect} from 'react-redux';
import Column from './Column';

export const getColumnsForList = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

const mapStateToProps = (state, props) => ({
  cards: getColumnsForList(state, props.id),
});

export default connect(mapStateToProps)(Column);