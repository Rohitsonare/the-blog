import { useState } from 'react';
import './App.css';
import PostsForm from './components/posts/PostsForm';
import PostsList from './PostsList';

function App() {
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('posts')) || []);

  return (
    <div className="App">
      <PostsForm setPosts={setPosts} posts={posts} />
      <PostsList posts={posts} />
    </div>
  );
}

export default App;
