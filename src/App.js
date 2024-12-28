import { useState } from 'react';
import './App.css';
import PostsForm from './components/posts/PostsForm';

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="App">
      <PostsForm setPosts={setPosts} posts={posts} />
    </div>
  );
}

export default App;
