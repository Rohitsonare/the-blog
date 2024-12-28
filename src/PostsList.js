function PostsList({ posts }) {    
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.postId}>
          <b>#{post.postId}</b> - <i>User {post.userId}</i>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  )
}

export default PostsList;
