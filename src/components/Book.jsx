import PropTypes from 'prop-types';
import './Book.css';

Book.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export function Book({ src, alt, title, category, authors }) {
  return (
    <li className="books__item">
      <article className="book">
        <div className="book__img-wrapper">
          <img className="book__img" src={src} alt={alt} />
        </div>

        <div className="book__info">
          <p className="book__category">{category} </p>
          <h3 className="book__title">{title}</h3>
          <p className="book__authors">{authors}</p>
        </div>
      </article>
    </li>
  );
}
