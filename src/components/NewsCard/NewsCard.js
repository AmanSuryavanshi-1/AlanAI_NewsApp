import { Card,CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography,Button } from '@material-ui/core'
import React from 'react'
// import NewsCards from './NewsCards'
import useStyles from './style'

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
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