import PropTypes from 'prop-types';
import './LoadMore.css';

LoadMore.propTypes = {
  onLoadMoreBtnClick: PropTypes.func,
};

export function LoadMore({ onLoadMoreBtnClick }) {
  return (
    <div className="loadmore__wrapper">
      <button className="loadmore__btn" onClick={onLoadMoreBtnClick}>
        Load More...
      </button>
    </div>
  );
}
