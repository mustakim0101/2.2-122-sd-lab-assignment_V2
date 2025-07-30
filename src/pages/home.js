import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../css/kopa.module.css';
import Button from '../part_by_part/button';

const Home = () => {
  const navigate = useNavigate();
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 1; // Show 1 post per page for simplicity
  const dummyPosts = [
    {
      id: 1,
      title: 'Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor',
      content: 'Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor',
      author: 'John Doe',
      date: '7 January 2026',
      reactions: { Like: 20, Love: 60, Angry: 5, Sad: 5 },
      comments: [
        { id: 1, author: 'Author Name', date: '10 February 2025', text: 'Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor' },
        { id: 2, author: 'Author Name', date: '10 February 2025', text: 'Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor' },
      ],
    },
  ];

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dummyPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(dummyPosts.length / postsPerPage);

  const handleReactionClick = (reaction) => {
    setSelectedReaction(reaction === selectedReaction ? null : reaction);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>This is the Home Page</h2>
      <h1 className={styles.heading}>This is the home page</h1>

      {currentPosts.map((post) => (
        <div key={post.id} style={{ marginBottom: '20px' }}>
          <h3>{post.title}</h3>
          <div style={{ backgroundColor: '#800000', height: '100px', margin: '10px 0' }}></div>
          <p>{post.content}</p>
          <p>
            Author Name: <Link to={`/author/${post.author}`}>{post.author}</Link> | {post.date}
          </p>
          <div style={{ display: 'flex', gap: '10px', margin: '10px 0' }}>
            {Object.keys(post.reactions).map((reaction) => (
              <button
                key={reaction}
                onClick={() => handleReactionClick(reaction)}
                style={{
                  backgroundColor: selectedReaction === reaction ? '#d3d3d3' : '#e0e0e0',
                  padding: '5px 10px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {reaction} {post.reactions[reaction]}%
              </button>
            ))}
          </div>
          <div style={{ backgroundColor: '#e0e0e0', padding: '10px', margin: '10px 0' }}>
            <p>{post.comments.length} Comments</p>
            <input type="text" placeholder="Write your comment..." style={{ width: '70%', padding: '5px' }} />
            <button style={{ padding: '5px 10px' }}>→</button>
            {post.comments.map((comment) => (
              <div key={comment.id} style={{ margin: '10px 0' }}>
                <p>
                  <span style={{ color: 'blue' }}>{comment.author}</span>, {comment.date} | Report
                </p>
                <p>{comment.text}</p>
                <p>Like 12 Dislike 1 Reply</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div style={{ marginTop: '20px' }}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            style={{
              margin: '0 5px',
              padding: '5px 10px',
              backgroundColor: currentPage === number ? '#d3d3d3' : '#e0e0e0',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {number}
          </button>
        ))}
      </div>

      <Button
        label="Click Me"
        variant="primary"
        onClick={() => navigate('/pokemonchart')}
      />

      <br /><br />

      <Button
        label="Go to About"
        variant="secondary"
        onClick={() => navigate('/about')}
      />

      <br /><br />

      <Button
        label="Go to Notification"
        variant="secondary"
        onClick={() => navigate('/notification')}
      />
    </div>
  );
};

export default Home;

/*
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/kopa.module.css';
import Button from '../part_by_part/button';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>This is the Home Page</h2>
      <h1 className={styles.heading}>This is the home page</h1>

      <Button
        label="Click Me"
        variant="primary"
        onClick={() => navigate('/pokemonchart')}
      />

      <br /><br />

      <Button
        label="Go to About"
        variant="secondary"
        onClick={() => navigate('/about')}
      />

      <br /><br />

      <Button
        label="Go to Notification"
        variant="secondary"
        onClick={() => navigate('/notification')}
      />

    </div>
  );
};

export default Home;*/
/*
import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import styles from '../css/kopa.module.css';
import Button from '../part_by_part/button'; // ✅ Ensure button export/import is correct

const Home = () => {
  const navigate = useNavigate(); // ✅ Hook for programmatic navigation

  return (
    <div>
      <h2>This is the Home Page</h2>
      <h1 className={styles.heading}>This is the home page</h1>

      {}
      <Button label="Click Me" variant="primary" />

      <br /><br />

      {}
      <Button
        label="Go to About"
        variant="secondary"
        onClick={() => navigate('/about')}
      />
    </div>
  );
};

export default Home;
*/
/*
import React from 'react';
import styles from '../css/kopa.module.css';
import MyButton from '../part_by_part/button'; // ✅ make sure name matches export

const Home = () => {
  return (
    <div>
      <h2>This is the Home Page</h2>
      <h1 className={styles.heading}>This is the home page</h1>
      <MyButton label="Click Me" variant="primary" />
    </div>
  );
};

export default Home;
*/