import './App.css';
import { useState, useEffect } from 'react';
import { Book } from './components/Book';
import { Categories } from './components/Categories';

function App() {
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState('programming');
  const API_KEY = 'AIzaSyC8WyX6TjdhtBBFCDBPtvzKe0gUy4gRQ7E';
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${category}&maxResults=30&langRestrict=ru&key=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBooks(data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [category]);

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  return (
    <div>
      <Categories onChangeCategory={handleCategoryChange} />
      <ul className="books">
        {books.map((book) => (
          <Book
            key={book.id}
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
            category={book.volumeInfo.categories || 'Без категории'}
            title={book.volumeInfo.title || 'Навания нет'}
            authors={
              (book.volumeInfo.authors && book.volumeInfo.authors.join(', ')) ||
              'Автор(-ы) не известен'
            }
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
