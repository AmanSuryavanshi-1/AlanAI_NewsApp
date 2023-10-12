import React,{ useEffect,useState } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards';
import wordsToNumbers from 'words-to-numbers';
import './styles.css'
import img from './news.png'

const App = () => {
    const[newsArticles, setNewsArticles] = useState([]);
    const[activeArticle, setActiveArticle] = useState(-1);
    const alanKey = 'ca307562e7a2537f15277d25e9786be42e956eca572e1d8b807a3e2338fdd0dc/stage';
    // const alanKey ='b7c5003f6518b3a80b4d1ca9f98631012e956eca572e1d8b807a3e2338fdd0dc/stage';
    // const classes = useStyles();
    useEffect(() => {
        alanBtn({
          key: alanKey,
          onCommand: ({command, articles, number}) => {
            if (command === 'newsHeadlines') {
              setNewsArticles(articles);
              setActiveArticle(-1);
            }else if(command === 'highlight'){
              setActiveArticle((prevActiveArticle)=> prevActiveArticle+1);
            }else if(command === 'open'){
              const parsedNumber = number.length > 2 ? wordsToNumbers(number,{ fuzzy:true }): number;
              const article = articles[parsedNumber -1];

              if(parsedNumber > 20){
                alanBtn().playText('Please try that again.')       
               }else if( article){
                window.open(article.url,'_blank');
                alanBtn().playText('Opening...');
               }
              window.open(articles[number].url, '_blank');
            }
          },
        });
      }, []);
    return (
    <div>
      <div className="logoContainer">
        <img src="https://cdn.dribbble.com/users/61571/screenshots/727897/news-app-icon1.png" className="newsLogo" alt="newsimg"/>
        <h1>AI NewsMate</h1>
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle}s/>
    </div>
  )
}

export default App