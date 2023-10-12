import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import {Grid, Grow, Typography} from '@material-ui/core'
import './styles.css'

const infoCards = [
  {  title: 'Latest News', text: 'Give me the latest news' },
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

const NewsCards = ({articles, activeArticle}) => {
  if(!articles.length){
    return(
      <Grow in>
      <Grid className="container" container alignItems="stretch" spacing={2}>
      {infoCards.map((infoCard, i) => (
            <Grid key={i} item xs={12} sm={6} md={4} lg={3} className="infoCard">
              <div className="card">
                <Typography className="content" style={{color: "rgb(255, 255, 255)",fontSize: 18,fontFamily:'Cinzel', textShadow: "5px 5px 5px #001C30"}} variant='h6'>{infoCard.title}</Typography>
                {infoCard.info ? (
  <Typography className="content" variant='h6' style={{ fontSize: 15, color:'black',fontFamily: "'Poppins', sans-serif" }}>
                    <strong style={{color:'white'}}>{infoCard.title.split(' ')[2]}:</strong>
                <hr />                   
                    <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography className="content" variant='h6' style={{ fontSize: 15, color:'black',fontFamily: "Poppins, cursive", fontWeight:800, color:'rgb(216, 216, 216)' }}>
                  <hr /> Try Saying: <br />
                  <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
      </Grid> 
    </Grow>
    )
  }
  return (
    <Grow in>
      <Grid className="container" container alignItems="stretch" spacing={3}>
      {articles.map((article, i)=>(
        <Grid item xs={12} sm={6} md={4} lg={3} style={{display:'flex'}} >
            <NewsCard article={article} activeArticle={activeArticle} i={i}/>
        </Grid>
      ))} 
      </Grid>
    </Grow>
  )
}

export default NewsCards