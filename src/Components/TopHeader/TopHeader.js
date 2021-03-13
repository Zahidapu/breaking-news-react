import React, {useEffect} from "react";
import  {useState } from "react";
import News from "../News/News";

const TopHeader = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
            fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=780875ad571549749544c1bcfef77b44')
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, [])

    return (
        <div>
            <h2>Top Headlines: {articles.length}</h2>
            {
                articles.map(article=><News article={article}></News>)
            }
        </div>
    );
};

export default TopHeader;
