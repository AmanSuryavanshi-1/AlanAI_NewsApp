import React, { useState, useEffect, createRef } from 'react';
import './NewsCard.css'; // Import your own stylesheet
import newsCover from '../Images/newsCover.jpg';
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
    if(i===activeArticle && elementRefs[activeArticle]){
      scrollToRef(elementRefs[activeArticle]);
    }
  }, [i, activeArticle, elementRefs]);

  return (
      <div ref={elementRefs[i]} className={`newsActive ${activeArticle === i ? 'activeCard' : ''}`}>
        <div className='newsCont'>
        <span className="badge">{source.name}</span>
        <img className="newsImg" src={urlToImage || newsCover} alt={title} />
          <div className="newsDetail1">
            <h4 className="newsT">{title}</h4>
            <p className="newsDesc">{description}...</p>
          </div>
          <p className="newsDate">{(new Date(publishedAt)).toDateString()}</p>
        <div className="newsActions">
        {/* eslint-disable-next-line */}
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
