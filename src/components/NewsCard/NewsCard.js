import React from 'react';
import './style.css';

const NewsItem = (props) => {
  const { title, description, imageUrl, newsUrl, source, i } = props;

  return (
    <div className="news">
      <span className="badge">{source}</span>
      <div href={newsUrl} target="_blank" className="newsLink">
        <img src={imageUrl || 'https://i.ytimg.com/vi/3LgKoQByVQE/maxresdefault.jpg'} alt={title} className="newsImage" />
        <div className="newsDetails">
          <h4 className="newsTitle">{title}</h4>
          <p className="newsDescription">{description}...</p>
          {/* <p className="newsDescription">{description ? `${description}...` : 'To get the full update related to the news, click on Show More...'}</p> */}
        </div>
      </div>
      {/* <div className="newsActions">
        <span className="newsIndex">{i + 1}</span>
      </div> */}
      <a href={newsUrl} target="_blank" className="readMoreLink">
          Read More
        </a>
    </div>
  );
};

export default NewsItem;

