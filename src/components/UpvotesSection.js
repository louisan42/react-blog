import React from "react";

const UpvotesSection = ({ articleName, upvotes, setArticleInfo}) => {

    const upvoteArticle = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvote`,{
            method : 'POST',
        })

        const body = await result.json();
        setArticleInfo(body.updatedArticleInfo);

    }

    return (

        <div id="upvotes-section">
            <button onClick={() => upvoteArticle()}>Upvote article</button>
            <p>This post has been upvoted {upvotes} times.</p>

        </div>

    )
}

export default UpvotesSection;