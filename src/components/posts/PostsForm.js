import { useState } from 'react';
import '../../App.css'; 

function PostsForm() {
  // Generate a random user ID function
  const generateRandomUserId = () => {
    return 'user_' + Math.random().toString(36).substr(2, 9); 
  };

  const [formData, setFormData] = useState({
    title: '',
    body: '',
    userId: generateRandomUserId(), 
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    console.log('Post Submitted:', formData);

   
    setFormData({
      title: '',
      body: '',
      userId: generateRandomUserId(), 
    });
  };

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
            value={formData.title}
            onChange={handleChange}
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
            value={formData.body}
            onChange={handleChange}
            required
            placeholder="Enter post content"
            rows="5"
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
