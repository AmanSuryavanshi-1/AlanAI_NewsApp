import React,{ useEffect,useState } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards';
import wordsToNumbers from 'words-to-numbers';
import useStyles from './styles'

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Navbar from './components/Navbar';

const App = () => {
    const[newsArticles, setNewsArticles] = useState([]);
    const[activeArticle, setActiveArticle] = useState(-1);
    const alanKey = 'ca307562e7a2537f15277d25e9786be42e956eca572e1d8b807a3e2338fdd0dc/stage';
    // const alanKey ='b7c5003f6518b3a80b4d1ca9f98631012e956eca572e1d8b807a3e2338fdd0dc/stage';
    const classes = useStyles();
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
      const[progress, setProgress]= useState(0)
    return (
    <div>
      <BrowserRouter>
<Navbar/>
<LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />


      <div>
        <Routes>
        {/* <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country= {country} category="general"/>}></Route>
        <Route exact path="/entertainment" element= {<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country} category="entertainment"/>}></Route>
        <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={country} category="business"/>}></Route>
        <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={country} category="health"/>}></Route>
        <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={country} category="science"/>}></Route>
        <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category="sports"/>}></Route>
        <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category="technology"/>}></Route> */}
        </Routes>
        </div>
 </BrowserRouter>
      <div className={classes.logoContainer}>
        <img src="https://cdn.dribbble.com/users/61571/screenshots/727897/news-app-icon1.png" className={classes.newsLogo} alt="newsimg"/>
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle}s/>
    </div>
  )
}

export default App