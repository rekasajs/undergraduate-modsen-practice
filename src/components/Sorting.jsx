import './Sorting.css';
import PropTypes from 'prop-types';

Sorting.propTypes = {
  onChangeSortingType: PropTypes.func,
  selected: PropTypes.string.isRequired,
};

export function Sorting({ onChangeSortingType, selected }) {
  return (
    <select className="sorting__select" name="sorting" onChange={(event) => onChangeSortingType(event.target.value)} value={selected}>
      <option value="relevance">relevance</option>
      <option value="newest">newest</option>
    </select>
  );
}
