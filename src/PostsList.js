function PostsList({ posts }) {    
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <b>#{post.id}</b> - <i>User {post.userId}</i>
          <p>{post.title}</p>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  )
}

export default PostsList;
