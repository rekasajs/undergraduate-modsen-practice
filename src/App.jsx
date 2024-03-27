import './App.css';
import { useState, useEffect } from 'react';
import { Book } from './components/Book';
import { Categories } from './components/Categories';
import { LoadMore } from './components/LoadMore';
import { Sorting } from './components/Sorting';

function App() {
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState('all');
  const [sortingType, setSortingType] = useState('relevance');
  const [startIndex, setStartIndex] = useState(0);

  const API_KEY = 'AIzaSyC8WyX6TjdhtBBFCDBPtvzKe0gUy4gRQ7E';

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${category}&startIndex=${startIndex}&orderBy=${sortingType}&maxResults=30&langRestrict=ru&key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Response error');
      }
      const data = await response.json();
      setBooks((prevBooks) => [...prevBooks, ...data.items]);
    } catch (error) {
      console.error('Ошибка получения данных:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category, startIndex, sortingType]);

  const handleLoadMoreBtnClick = () => {
    setStartIndex((prevStartIndex) => prevStartIndex + 30);
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
    setBooks([]);
    setStartIndex(0);
  };

  const handleSortingTypeChange = (sortingType) => {
    setSortingType(sortingType);
    setBooks([]);
    setStartIndex(0);
  };

  return (
    <div>
      <div className="navigation">
        <Categories onChangeCategory={handleCategoryChange} selected={category} />
        <Sorting onChangeSortingType={handleSortingTypeChange} selected={sortingType} />
      </div>
      <ul className="books">
        {books.map((book, index) => (
          <Book
            key={index}
            src={book.volumeInfo.imageLinks?.thumbnail}
            alt={book.volumeInfo.title}
            categories={book.volumeInfo.categories || [category]}
            title={book.volumeInfo.title || 'Названия нет'}
            authors={(book.volumeInfo.authors && book.volumeInfo.authors.join(', ')) || 'Автор(-ы) не известен'}
          />
        ))}
      </ul>
      <LoadMore onLoadMoreBtnClick={handleLoadMoreBtnClick} />
    </div>
  );
}

export default App;
