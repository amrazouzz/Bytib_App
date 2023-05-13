import React, { useEffect, useState } from 'react';
import { API_URL } from '../../api/api';

const ArticlesData = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const response = await fetch(`${API_URL}/articles/`);
      const data = await response.json();
      setArticles(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  

  return articles;
};

export default ArticlesData;
