import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArticlesPage = () => {
    let name = useParams().name;
    const article = articleContent.find(article => article.name === name)

    const otherArticles = articleContent.filter(article => (article.name !== name))

    const [articleInfo,setArticleInfo] = useState({
        upvotes: 0,
        comments: []
    });

    useEffect(()=>{


        setArticleInfo({
            upvotes: 3
        })
    },[name])

    return  (
    
    <>
    <h1>{article.title}</h1>
    <p>This post has been upvoted {articleInfo.upvotes} times</p>
        {article.content.map((paragraph,key) => (
            <p key={key}>
                {paragraph}
            </p>
        ))}
        <h3>Other Articles</h3>
        <ArticlesList articles={otherArticles}/>
    </>
    )
};

export default ArticlesPage;