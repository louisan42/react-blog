import React,{useState} from "react";

const AddCommentForm = ({articleName, setArticleInfo}) => {

    const[commentText, setCommentText] = useState('');
    const[username, setUsername] = useState('');

    const addComment = async () => {
        const result= await fetch(`/api/articles/${articleName}/add-comment`, {
            method: 'POST',
            body: JSON.stringify({username, text: commentText}),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const body = await result.json();
        setArticleInfo(body.updatedArticleInfo);
        setUsername('');
        setCommentText('');
    }

    const handleNameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleTextChange = (e) => {
        setCommentText(e.target.value);
    }

  return (
    <div id="add-comment-form">
        <h3>Add a comment</h3>
      <label>
        Name:
        <input type="text" value={username} onChange={handleNameChange}/>
      </label>
      <label>
        Comment:
        <textarea rows="4" cpls="50" value={commentText} onChange={handleTextChange}/>
      </label>
      <button onClick={()=>addComment()}>Add Comment</button>
    </div>
  );
};

export default AddCommentForm;
