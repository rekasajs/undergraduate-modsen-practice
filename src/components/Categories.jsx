import './Categories.css';
import PropTypes from 'prop-types';

Categories.propTypes = {
  onChangeCategory: PropTypes.function,
};

export function Categories({ onChangeCategory }) {
  return (
    <select
      className="categories__select"
      name="categories"
      onChange={(event) => onChangeCategory(event.target.value)}
    >
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
