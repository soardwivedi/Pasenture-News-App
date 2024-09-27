import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import { fetchNews } from '../utils/news-utils';
import NewsList from './NewsList';
import { useParams } from 'react-router-dom';

const NewsByCategory = () => {
  const { category } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const newsData = await fetchNews(category);
        setNewsData(newsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);

  if (error) return <div>Something went wrong!</div>;

  if (loading) return <div>Loading..</div>;

  if (!newsData.length) return <div>No news found!</div>;

  return (
    <Container>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <NewsList newsData={newsData}></NewsList>
      </div>
    </Container>
  );
};

export default NewsByCategory;
