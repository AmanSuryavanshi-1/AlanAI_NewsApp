import React,{ useEffect,useState } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards';

const App = () => {
    const[newsArticles, setNewsArticles] = useState([]);

    const alanKey = 'ca307562e7a2537f15277d25e9786be42e956eca572e1d8b807a3e2338fdd0dc/stage';

    useEffect(() => {
        alanBtn({
          key: alanKey,
          onCommand: ({command, articles}) => {
            if (command === 'newsHeadlines') {
              setNewsArticles(articles);
            }
          },
        });
      }, []);
    return (
    <div>
        ALan AI news Application
      <NewsCards articles={newsArticles}/>
    </div>
  )
}

export default App