import { useState } from 'react';
import './App.css';
import PostsForm from './components/posts/PostsForm';

function App() {
  const [posts, setPosts] = useState([]);
  // posts contract schema
  // [
  //   {
  //     id: randomID,
  //     title: "Post 1",
  //     content: "This is the first post",
  //     userId: 1,
  //   }
  // ];
  // JSX

  return (
    <div className="App">
      <PostsForm />
    </div>
  );
}

export default App;
