import React,{ useEffect,useState } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles'
const App = () => {
    const[newsArticles, setNewsArticles] = useState([]);
    const[activeArticle, setActiveArticle] = useState(-1);
    const alanKey = 'ca307562e7a2537f15277d25e9786be42e956eca572e1d8b807a3e2338fdd0dc/stage';

    const classes = useStyles();
    useEffect(() => {
        alanBtn({
          key: alanKey,
          onCommand: ({command, articles}) => {
            if (command === 'newsHeadlines') {
              setNewsArticles(articles);
              setActiveArticle(-1);
            }else if(command === 'highlight'){
              setActiveArticle((prevActiveArticle)=> prevActiveArticle+1);
            }
          },
        });
      }, []);
    return (
    <div>
      <div className={classes.logoContainer}>
        <img src="https://cdn.dribbble.com/users/61571/screenshots/727897/news-app-icon1.png" className={classes.newsLogo} alt="newsimg"/>
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle}s/>
    </div>
  )
}

export default App