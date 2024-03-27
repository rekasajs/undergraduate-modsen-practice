import './Categories.css';
import PropTypes from 'prop-types';

Categories.propTypes = {
  onChangeCategory: PropTypes.func,
  selected: PropTypes.string.isRequired,
};

export function Categories({ onChangeCategory, selected }) {
  return (
    <select className="categories__select" name="categories" onChange={(event) => onChangeCategory(event.target.value)} value={selected}>
      <option value="all">all</option>
      <option value="art">art</option>
      <option value="biography">biography</option>
      <option value="computers">computers</option>
      <option value="history">history</option>
      <option value="medical">medical</option>
      <option value="poetry">poetry</option>
    </select>
  );
}
