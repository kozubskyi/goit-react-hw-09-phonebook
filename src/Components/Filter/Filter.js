// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import './Filter.scss';
// import * as actions from '../../redux/contacts/contacts-actions';
// Actions
import { changeFilter } from '../../redux-toolkit/contacts/contactsActions';
// Selectors
import { getFilter } from '../../redux-toolkit/contacts/contactsSelectors';

const Filter = () => {
  const filter = useSelector(state => getFilter(state));
  const dispatch = useDispatch();

  return (
    <>
      <label className="find-contacts__label" htmlFor="find-contacts-form__filter">
        Find contacts by name
      </label>
      <input
        type="search"
        id="find-contacts-form__filter"
        name="filter"
        className="find-contacts__input"
        value={filter}
        onChange={event => dispatch(changeFilter(event.target.value))}
        required
        autoComplete="off"
        autoFocus
      ></input>
    </>
  );
};

// const mapStateToProps = state => ({
//   filter: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onFilterChange: event => dispatch(actions.changeFilter(event.target.value)),
// });

// Filter.defaultProps = {
//   filter: '',
// };

// Filter.propTypes = {
//   onFilterChange: PropTypes.func.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
export default Filter;
