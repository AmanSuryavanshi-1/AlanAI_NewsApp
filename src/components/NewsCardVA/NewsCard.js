import React, { useState, useEffect, createRef } from 'react';
import './NewsCard.css'; // Import your own stylesheet

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i, activeArticle }) => {
  const [elementRefs, setElementRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    setElementRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === activeArticle && elementRefs[activeArticle]) {
      scrollToRef(elementRefs[activeArticle]);
    }
  }, [i, activeArticle, elementRefs]);

  return (
    <div>
      <div ref={elementRefs[i]} className={`news ${activeArticle === i ? 'activeCard' : ''}`}>
        <a href={url} target="_blank" className="newsLink">
          <img className="newsImage" src={urlToImage || 'https://i.ytimg.com/vi/3LgKoQByVQE/maxresdefault.jpg'} alt={title} />
          <div className="newsDetails">
            <p className="newsDate">{(new Date(publishedAt)).toDateString()}</p>
            <span className="badge">{source.name}</span>
            <h4 className="newsTitle">{title}</h4>
            <p className="newsDescription">{description}</p>
          </div>
        </a>
        <div className="newsActions">
          <a href={url} target="_blank" className="readMoreLink">
            Read More
          </a>
          <span className="newsIndex">{i + 1}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
