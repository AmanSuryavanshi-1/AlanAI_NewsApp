import React from 'react';
import './NewsItem.css';
import newsCover from '../Images/newsCover.jpg'
import newsCover2 from '../Images/loading.gif'
const NewsItem = (props) => {
  const { title, description, imageUrl, newsUrl, source, i, date } = props;

  return (
    <div className="news">
      <span className="badge">{source}</span>
        <img src={imageUrl || newsCover} alt={title} className="newsImage" />
        <div className="newsDetails">
          <h4 className="newsTitle">{title}</h4>
          <p className="newsDescription">{description}...</p>
          {/* <p className="newsDescription">{description ? `${description}...` : 'To get the full update related to the news, click on Show More...'}</p> */}
        </div>
        <p className="newsDate">{(new Date(date)).toDateString()}</p>
      {/* <div className="newsActions">
        <span className="newsIndex">{i + 1}</span>
      </div>  */}
      <a href={newsUrl} target="_blank" className="readMoreLink">
          Read More
        </a>
    </div>
  );
};

export default NewsItem;

