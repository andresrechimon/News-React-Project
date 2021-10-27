import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import NewsList from './components/NewsList';

function App() {
  //Defining category and news
  const [category, setCategory] = useState('');
  const [news, setNews] = useState([]);

  useEffect(() => {
    const consultAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=5a8ae994de384efd847c513c0f3602b8`;

      const answer = await fetch(url);
      const news = await answer.json();

      setNews(news.articles);
    }
    consultAPI();
  }, [category])

  return (
    <Fragment>
      <Header
      title='Buscador de Noticias'
      />

      <div className="container white">
        <Form
        setCategory={setCategory}
        />

        <NewsList
        news={news}
        />
      </div>
    </Fragment>
  );
}

export default App;
