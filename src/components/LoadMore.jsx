import PropTypes from 'prop-types';
import './LoadMore.css';

LoadMore.propTypes = {
  onClick: PropTypes.func,
};

export function LoadMore({ onClick }) {
  return (
    <div className="loadmore__wrapper">
      <button className="loadmore__btn" onClick={onClick}>
        Load More...
      </button>
    </div>
  );
}
