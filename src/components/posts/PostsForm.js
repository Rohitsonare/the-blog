import { useState } from 'react';
import '../../App.css'; 

function PostsForm({posts: prevPosts, setPosts}) {
  // Generate a random user uuid
  const generateRandomId = (resource) => {
    return `${resource}_${Math.floor(Math.random() * 1000)}`;
  };
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // Create a new post object
    const newPost = {
      title,
      body,
      userId: generateRandomId('user'),
      postId: generateRandomId('post'),
    };
    // Update the posts state
    const updatedPosts = [...prevPosts, newPost];
    setPosts(updatedPosts);

    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    // Reset the form
    setTitle('');
    setBody('');
  }

  return (
    <div className="App">
      <h1>Posts Form</h1>

      <form onSubmit={handleSubmit}>
        {/* Title Input */}
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter post title"
          />
        </div>

        {/* Body Input */}
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            placeholder="Enter post content"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Submit Post</button>
        </div>
      </form>

      
    </div>
  );
}

export default PostsForm;
