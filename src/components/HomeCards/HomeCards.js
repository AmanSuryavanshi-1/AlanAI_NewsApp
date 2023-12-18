import React from 'react'
import NewsCard from '../NewsCardVA/NewsCard'
import './HomeCards.css'

const infoCards = [
  {  title: 'Latest News', text: 'Give me latest news' },
  {
    title: 'News by Categories',
    info:
      'Business, Entertainment, General, Health, Science, Sports, Technology',
    text: 'Give me the latest Technology news',
  },
  {
    title: 'News by Terms',
    info: 'Bitcoin, PlayStation 6, Smartphones, Donald Trump...',
    text: "What's up with the PlayStation 5",
  },
  {
    title: 'News by Sources',
    info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...',
    text: 'Give me the news from CNN',
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  if (!articles.length) {
    return (
      <div className="info_container">
        {infoCards.map((infoCard, i) => (
          <div key={i} className="infoCard">
            <div className="card">
              <div className="content" style={{ color: 'rgb(255, 255, 255)', fontSize: 18, fontFamily: 'Cinzel', textShadow: '5px 5px 5px #001C30' }}>
                {infoCard.title}
              </div>
              {infoCard.info ? (
                <div className="content" style={{ fontSize: 15, color: 'black', fontFamily: "'Poppins', sans-serif" }}>
                  <strong style={{ color: 'white' }}>{infoCard.title.split(' ')[2]}:</strong>
                  <hr />
                  <br />
                  {infoCard.info}
                </div>
              ) : null}
              <div className="content" style={{ fontSize: 15, color: 'black', fontFamily: "Poppins, cursive", fontWeight: 800, color: 'rgb(216, 216, 216)' }}>
                <hr /> Try Saying: <br />
                <i>{infoCard.text}</i>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="main">
      {articles.map((article, i) => (
        <div className='newsItem'key={i} style={{ display: 'flex' }}>
          <NewsCard article={article} activeArticle={activeArticle} i={i} />
        </div>
      ))}
    </div>
  );
};

export default NewsCards;