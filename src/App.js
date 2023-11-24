import React,{ useEffect,useState } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards';
import wordsToNumbers from 'words-to-numbers';
import './styles.css'
import img from './news.png'

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Navbar from './components/Navbar/Navbar.jsx';
import News from './components/AllNews/News.jsx';

const App = () => {
    const[newsArticles, setNewsArticles] = useState([]);
    const[activeArticle, setActiveArticle] = useState(-1);
    const apiKey = '3fd4a5e6fe19405489cc49ea3f5b8bcc';
    const alanKey = 'ca307562e7a2537f15277d25e9786be42e956eca572e1d8b807a3e2338fdd0dc/stage';
    // const alanKey ='b7c5003f6518b3a80b4d1ca9f98631012e956eca572e1d8b807a3e2338fdd0dc/stage';
    // const classes = useStyles();
    useEffect(() => {
        alanBtn({
          key: alanKey,
          onCommand: ({command, articles, number, category}) => {
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
          switch (command) {
            case 'openNews':
            handleOpenNews(category);
            break;
          case 'openHomePage':
            // Handle the command to open the home page
            handleOpenHomePage();
            break;
          
          default:
            break;
        }
          },
        });
      }, []);
      const handleOpenNews = (category) => {
        window.location.href = `/${category.toLowerCase()}`;
      };
  
  const handleOpenHomePage = () => {
    // Perform actions to open the home page
    // For example, redirect to the home route
    window.location.href = '/';
  };
      const[progress, setProgress]= useState(0)
      const pageSize=8;
      const country='in';

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
        <Route exact path="/" element={<div><div className="logoContainer">
        <img src="https://cdn.dribbble.com/users/61571/screenshots/727897/news-app-icon1.png" className="newsLogo" alt="newsimg"/>
        <h1>AI NewsMate</h1>
        </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>}></Route>
        {/* <Route exact path="/entertainment" element= {NewsCards ? (
                  <NewsCards articles={newsArticles} activeArticle={activeArticle} />
                ) : (
                  <News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country} category="entertainment" />
                )}></Route> */}
        <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country} category="entertainment" />}></Route>
        <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={country} category="business"/>}></Route>
        <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={country} category="health"/>}></Route>
        <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={country} category="science"/>}></Route>
        <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category="sports"/>}></Route>
        <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category="technology"/>}></Route>
        </Routes>
        </div>
 </BrowserRouter>
    </div>
  )
}

export default App