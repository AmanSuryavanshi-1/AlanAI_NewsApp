import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import './style'; // Assuming you have a CSS file for additional styling

const NewsItem = (props) => {
  const { title, description, imageUrl, newsUrl, author, date, source, i, activeArticle } = props;

  const cardStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    right: '0',
  };

  const badgeStyle = {
    backgroundColor: '#dc3545',
    color: '#fff',
    borderRadius: '20px',
    padding: '5px 10px',
  };

  const card = {
    height: '500px',
  };

  const image = {
    height: '250px',
  };

  return (
    <div className={`my-3 ${activeArticle === i ? 'active' : ''}`}>
      <Card className="card" style={card}>
        <CardActionArea href={newsUrl} target="_blank">
          <CardMedia className="card-img-top" style={image} image={imageUrl || 'https://i.ytimg.com/vi/3LgKoQByVQE/maxresdefault.jpg'} />
          <div style={cardStyle}>
            <span className="badge" style={badgeStyle}>
              {source}
            </span>
          </div>
          <CardContent>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}...
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href={newsUrl} target="_blank">
            Read More
          </Button>
          <Typography variant="h5" color="textSecondary">
            {i + 1}
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default NewsItem;

// import { Card,CardActionArea, CardActions, CardContent, CardMedia, Typography,Button } from '@material-ui/core'
// import React from 'react'
// // import classNames from 'classnames';
// import useStyles from './style'
// import { useState,useEffect, createRef } from 'react'

// const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i, activeArticle }) => {
//   const classes = useStyles();

//   //implementing auto scroll
//   const [elementRefs, setElementRefs] = useState([]);
//   const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop -50);
//   // this is to set refs for all elements
//   useEffect(() => {
//     setElementRefs((refs) =>
//       Array(20)
//         .fill()
//         .map((_, j) => refs[j] || createRef()));
//   }, []);

//   useEffect(() => {
//     if(i===activeArticle && elementRefs[activeArticle]){
//       scrollToRef(elementRefs[activeArticle]);
//     }
//   }, [i, activeArticle, elementRefs]);
//   return (
//     <div>
//       <Card ref={elementRefs[i]} className={ activeArticle === i ? classes.activeCard: classes.card}>
//         <CardActionArea href={url} target="_blank"> 
//           <CardMedia className={classes.media} image={urlToImage || 'https://i.ytimg.com/vi/3LgKoQByVQE/maxresdefault.jpg'}/>
//           <div className={classes.details}>
//             <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
//             <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
//           </div>
//           <Typography className={classes.title} gutterBottom variant='h5'>{title}</Typography>
//           <CardContent>
//             <Typography variant='body2' color="textSecondary" component="p">{description}</Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions className={classes.CardActions}>
//         <Button size="small" color="primary">Read More</Button>
//         <Typography variant='h5' color='textSecondary'>{i+1}</Typography>
//         </CardActions>
//       </Card>
//     </div>
//   )
// }

// export default NewsCard