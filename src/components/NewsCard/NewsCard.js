import { Card,CardActionArea, CardActions, CardContent, CardMedia, Typography,Button } from '@material-ui/core'
import React from 'react'
// import classNames from 'classnames';
import useStyles from './style'
import { useState,useEffect, createRef } from 'react'

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i, activeArticle }) => {
  const classes = useStyles();

  //implementing auto scroll
  const [elementRefs, setElementRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop -50);
  // this is to set refs for all elements
  useEffect(() => {
    setElementRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef()));
  }, []);

  useEffect(() => {
    if(i===activeArticle && elementRefs[activeArticle]){
      scrollToRef(elementRefs[activeArticle]);
    }
  }, [i, activeArticle, elementRefs]);
  return (
    <div>
      <Card ref={elementRefs[i]} className={ activeArticle === i ? classes.activeCard: classes.card}>
        <CardActionArea href={url} target="_blank"> 
          <CardMedia className={classes.media} image={urlToImage || 'https://i.ytimg.com/vi/3LgKoQByVQE/maxresdefault.jpg'}/>
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
            <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
          </div>
          <Typography className={classes.title} gutterBottom variant='h5'>{title}</Typography>
          <CardContent>
            <Typography variant='body2' color="textSecondary" component="p">{description}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.CardActions}>
        <Button size="small" color="primary">Read More</Button>
        <Typography variant='h5' color='textSecondary'>{i+1}</Typography>
        </CardActions>
      </Card>
    </div>
  )
}

export default NewsCard