import {connect} from 'react-redux';
import List from './List';

export const getCardsForColumn = ({columns}, listId) => columns.filter(column => column.listId == listId);

const mapStateToProps = (state, props) => ({
  columns: getCardsForColumn(state, props.id),
});

export default connect(mapStateToProps)(List);