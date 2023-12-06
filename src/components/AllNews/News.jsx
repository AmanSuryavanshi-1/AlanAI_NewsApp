import React, { useEffect, useState } from 'react';
import NewsItem from '../NewsCard/NewsCard';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import './News.css';

const News = (props) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    try {
      setLoading(true);
      let res = await fetch(url);
      props.setProgress(30);
      let data = await res.json();
      props.setProgress(50);

      setArticles(data.articles);
      setTotalResults(data.totalResults);
      setLoading(false);

      props.setProgress(100);
    } catch (e) {
      console.log("Something is not working");
    }
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - AI NewsMate`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    try {
      let res = await fetch(url);
      let data = await res.json();

      setArticles(articles.concat(data.articles));
      setTotalResults(data.totalResults);
    } catch (e) {
      console.log("Something is not working");
    }
  };

  return (
    <>
      <h1 className="text-center">
        AI NewsMate : Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
      >
        <div className="main">
          {articles.map((element) => {
            return (
              <div className="newsItem" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 80) : ' '}
                  description={element.description ? element.description.slice(0, 180) : ' '}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
