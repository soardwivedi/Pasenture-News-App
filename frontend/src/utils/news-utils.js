import axios from 'axios';
import { getRandomElements } from './common-utils';

const fetchNews = async (category = '') => {
  try {
    const filtres = [];
    if (category) filtres.push(`category=${category}`);
    const queryStrings = filtres.length > 0 ? `?${filtres.join('&')}` : '';
    const API_BASE_PATH = process.env.REACT_APP_API_BASE_PATH;
    const newsRequest = axios.get(`${API_BASE_PATH}/news/api-1${queryStrings}`);
    const newsRequest2 = axios.get(
      `${API_BASE_PATH}/news/api-2${queryStrings}`
    );
    const newsRequest3 = axios.get(
      `${API_BASE_PATH}/news/api-3${queryStrings}`
    );

    const [newsResponse, newsResponse2, newsResponse3] = await Promise.all([
      newsRequest,
      newsRequest2,
      newsRequest3
    ]);

    const newsList = getRandomElements(newsResponse.data, 2).map((item) => {
      return {
        id: item.id,
        title: item.news_title,
        description: item.news_description,
        image: item.image_url
      };
    });
    const newsList2 = getRandomElements(newsResponse2.data, 2).map((item) => {
      return {
        id: item.article_id,
        title: item.headline,
        description: item.summary,
        image: item.thumbnail_url
      };
    });
    const newsList3 = getRandomElements(newsResponse3.data, 2).map((item) => {
      return {
        id: item.reference_id,
        title: item.title,
        description: item.details.content,
        image: item.links.thumbnail_url
      };
    });

    return newsList.concat(newsList2, newsList3);
  } catch (err) {
    throw err;
  }
};

export { fetchNews };
