import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../css/kopa.module.css';
import Button from '../part_by_part/button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const navigate = useNavigate();
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [currentCommentPage, setCurrentCommentPage] = useState(1);
  const commentsPerPage = 3;
  const post = {
    id: 1,
    title: 'Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor',
    content: 'This is a simple explanation paragraph about the post. It contains some dummy text to fill the space and demonstrate the layout.',
    author: 'Mustakim Musa',
    date: '7 January 2026',
    reactions: { Like: 20, Love: 60, Angry: 5, Sad: 5 },
    comments: [
      { id: 1, author: 'Mustakim Musa', date: '10 February 2025', text: 'Great post!' },
      { id: 2, author: 'Mustakim Musa', date: '12 February 2025', text: 'Nice content!' },
      { id: 3, author: 'Mustakim Musa', date: '15 February 2025', text: 'Interesting!' },
      { id: 4, author: 'Mustakim Musa', date: '18 February 2025', text: 'Good job!' },
      { id: 5, author: 'Mustakim Musa', date: '20 February 2025', text: 'Awesome!' },
      { id: 6, author: 'Mustakim Musa', date: '22 February 2025', text: 'Cool stuff!' },
    ],
  };

  const [commentReactions, setCommentReactions] = useState(
    post.comments.reduce((acc, comment) => {
      acc[comment.id] = { likeCount: 0, dislikeCount: 0, isLiked: false, isDisliked: false };
      return acc;
    }, {})
  );

  const indexOfLastComment = currentCommentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = post.comments.slice(indexOfFirstComment, indexOfLastComment);
  const totalCommentPages = Math.ceil(post.comments.length / commentsPerPage);

  const handleReactionClick = (reaction) => {
    setSelectedReaction(reaction === selectedReaction ? null : reaction);
  };

  const paginateComments = (pageNumber) => setCurrentCommentPage(pageNumber);

  const handleLike = (commentId) => {
    setCommentReactions((prev) => {
      const current = prev[commentId];
      if (!current.isLiked) {
        return {
          ...prev,
          [commentId]: {
            ...current,
            likeCount: current.likeCount + 1,
            isLiked: true,
            isDisliked: false,
            dislikeCount: current.isDisliked ? current.dislikeCount - 1 : current.dislikeCount,
          },
        };
      }
      return prev;
    });
  };

  const handleDislike = (commentId) => {
    setCommentReactions((prev) => {
      const current = prev[commentId];
      if (!current.isDisliked) {
        return {
          ...prev,
          [commentId]: {
            ...current,
            dislikeCount: current.dislikeCount + 1,
            isDisliked: true,
            isLiked: false,
            likeCount: current.isLiked ? current.likeCount - 1 : current.likeCount,
          },
        };
      }
      return prev;
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate('/pokemonchart')}>Click Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate('/about')}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate('/notification')}>Notification</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h2>This is the Home Page</h2>
      <h1 className={styles.heading}>This is the home page</h1>

      <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
        <h3>{post.title}</h3>
        <div style={{ backgroundColor: '#800000', height: '100px', margin: '10px 0' }}></div>
        <p>{post.content}</p>
        <p>
          <Link to={`/author/${post.author}`}>{post.author}</Link> | {post.date}
        </p>
        <div style={{ display: 'flex', gap: '10px', margin: '10px 0' }}>
          {Object.keys(post.reactions).map((reaction) => (
            <button
              key={reaction}
              onClick={() => handleReactionClick(reaction)}
              style={{
                backgroundColor: selectedReaction === reaction ? '#add8e6' : '#e0e0e0',
                padding: '5px 10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              {reaction} {post.reactions[reaction]}%
            </button>
          ))}
        </div>
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
          <p>{post.comments.length} Comments</p>
          <div style={{ display: 'flex', gap: '5px', margin: '10px 0' }}>
            <input type="text" placeholder="Write your comment..." style={{ flex: '1', padding: '5px' }} />
            <button style={{ padding: '5px 10px', backgroundColor: '#e0e0e0', border: '1px solid #ccc' }}>→</button>
          </div>
          {currentComments.map((comment) => {
            const { likeCount, dislikeCount, isLiked, isDisliked } = commentReactions[comment.id];

            return (
              <div key={comment.id} style={{ margin: '10px 0' }}>
                <p>
                  <Link to={`/author/${comment.author}`} style={{ color: 'blue' }}>{comment.author}</Link>, {comment.date} | Report
                </p>
                <p>{comment.text}</p>
                <button
                  onClick={() => handleLike(comment.id)}
                  style={{ padding: '5px', backgroundColor: isLiked ? '#add8e6' : '#e0e0e0', border: '1px solid #ccc', cursor: 'pointer', marginRight: '5px' }}
                >
                  Like {likeCount}
                </button>
                <button
                  onClick={() => handleDislike(comment.id)}
                  style={{ padding: '5px', backgroundColor: isDisliked ? '#add8e6' : '#e0e0e0', border: '1px solid #ccc', cursor: 'pointer' }}
                >
                  Dislike {dislikeCount}
                </button>
              </div>
            );
          })}
          <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '5px' }}>
            {Array.from({ length: totalCommentPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => paginateComments(number)}
                style={{
                  padding: '5px 10px',
                  backgroundColor: currentCommentPage === number ? '#add8e6' : '#e0e0e0',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                {number}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        <Button
          label="Go to About"
          variant="secondary"
          onClick={() => navigate('/about')}
        />
        <Button
          label="Go to Notification"
          variant="secondary"
          onClick={() => navigate('/notification')}
        />
      </div>
    </div>
  );
};

export default Home;
/*
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../css/kopa.module.css';
import Button from '../part_by_part/button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const navigate = useNavigate();
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [currentCommentPage, setCurrentCommentPage] = useState(1);
  const commentsPerPage = 3;
  const post = {
    id: 1,
    title: 'Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor',
    content: 'This is a simple explanation paragraph about the post. It contains some dummy text to fill the space and demonstrate the layout.',
    author: 'Mustakim Musa',
    date: '7 January 2026',
    reactions: { Like: 20, Love: 60, Angry: 5, Sad: 5 },
    comments: [
      { id: 1, author: 'User One', date: '10 February 2025', text: 'Great post!' },
      { id: 2, author: 'User Two', date: '12 February 2025', text: 'Nice content!' },
      { id: 3, author: 'User Three', date: '15 February 2025', text: 'Interesting!' },
      { id: 4, author: 'User Four', date: '18 February 2025', text: 'Good job!' },
      { id: 5, author: 'User Five', date: '20 February 2025', text: 'Awesome!' },
      { id: 6, author: 'User Six', date: '22 February 2025', text: 'Cool stuff!' },
    ],
  };

  const indexOfLastComment = currentCommentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = post.comments.slice(indexOfFirstComment, indexOfLastComment);
  const totalCommentPages = Math.ceil(post.comments.length / commentsPerPage);

  const handleReactionClick = (reaction) => {
    setSelectedReaction(reaction === selectedReaction ? null : reaction);
  };

  const paginateComments = (pageNumber) => setCurrentCommentPage(pageNumber);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate('/pokemonchart')}>Click Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate('/about')}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate('/notification')}>Notification</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h2>This is the Home Page</h2>
      <h1 className={styles.heading}>This is the home page</h1>

      <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
        <h3>{post.title}</h3>
        <div style={{ backgroundColor: '#800000', height: '100px', margin: '10px 0' }}></div>
        <p>{post.content}</p>
        <p>
          <Link to={`/author/${post.author}`}>{post.author}</Link> | {post.date}
        </p>
        <div style={{ display: 'flex', gap: '10px', margin: '10px 0' }}>
          {Object.keys(post.reactions).map((reaction) => (
            <button
              key={reaction}
              onClick={() => handleReactionClick(reaction)}
              style={{
                backgroundColor: selectedReaction === reaction ? '#add8e6' : '#e0e0e0',
                padding: '5px 10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              {reaction} {post.reactions[reaction]}%
            </button>
          ))}
        </div>
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
          <p>{post.comments.length} Comments</p>
          <div style={{ display: 'flex', gap: '5px', margin: '10px 0' }}>
            <input type="text" placeholder="Write your comment..." style={{ flex: '1', padding: '5px' }} />
            <button style={{ padding: '5px 10px', backgroundColor: '#e0e0e0', border: '1px solid #ccc' }}>→</button>
          </div>
          {currentComments.map((comment) => (
            <div key={comment.id} style={{ margin: '10px 0' }}>
              <p>
                <span style={{ color: 'blue' }}>{comment.author}</span>, {comment.date} | Report
              </p>
              <p>{comment.text}</p>
              <button
                onClick={() => alert('Like clicked for comment ' + comment.id)}
                style={{ padding: '5px', backgroundColor: '#e0e0e0', border: '1px solid #ccc', cursor: 'pointer' }}
              >
                Like
              </button>
            </div>
          ))}
          <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '5px' }}>
            {Array.from({ length: totalCommentPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => paginateComments(number)}
                style={{
                  padding: '5px 10px',
                  backgroundColor: currentCommentPage === number ? '#add8e6' : '#e0e0e0',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                {number}
              </button>
            ))}
          </div>
        </div>
      </div>

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
*/
/*
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../css/kopa.module.css';
import Button from '../part_by_part/button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const navigate = useNavigate();
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2; // Show 2 posts per page
  const dummyPosts = [
    {
      id: 1,
      title: 'Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor',
      content: 'Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor',
      author: 'John Doe',
      date: '7 January 2026',
      reactions: { Like: 20, Love: 60, Angry: 5, Sad: 5 },
      comments: [
        { id: 1, author: 'Author Name', date: '10 February 2025', text: 'Lorem ipsum Dolor Lorem ipsum Dolor' },
        { id: 2, author: 'Author Name', date: '10 February 2025', text: 'Lorem ipsum Dolor Lorem ipsum Dolor' },
      ],
    },
    {
      id: 2,
      title: 'Another Post Title Here',
      content: 'Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor',
      author: 'Jane Smith',
      date: '15 March 2026',
      reactions: { Like: 30, Love: 40, Angry: 15, Sad: 15 },
      comments: [
        { id: 3, author: 'User One', date: '12 April 2025', text: 'Great post!' },
        { id: 4, author: 'User Two', date: '12 April 2025', text: 'Nice content!' },
      ],
    },
    {
      id: 3,
      title: 'Third Post Example',
      content: 'Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor',
      author: 'Alex Brown',
      date: '20 May 2026',
      reactions: { Like: 50, Love: 30, Angry: 10, Sad: 10 },
      comments: [
        { id: 5, author: 'User Three', date: '15 June 2025', text: 'Interesting!' },
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate('/pokemonchart')}>Click Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate('/about')}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate('/notification')}>Notification</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h2>This is the Home Page</h2>
      <h1 className={styles.heading}>This is the home page</h1>

      {currentPosts.map((post) => (
        <div key={post.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
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
                  backgroundColor: selectedReaction === reaction ? '#add8e6' : '#e0e0e0',
                  padding: '5px 10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                {reaction} {post.reactions[reaction]}%
              </button>
            ))}
          </div>
          <div style={{ backgroundColor: '#f0f0f0', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
            <p>{post.comments.length} Comments</p>
            <div style={{ display: 'flex', gap: '5px', margin: '10px 0' }}>
              <input type="text" placeholder="Write your comment..." style={{ flex: '1', padding: '5px' }} />
              <button style={{ padding: '5px 10px', backgroundColor: '#e0e0e0', border: '1px solid #ccc' }}>→</button>
            </div>
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

      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '5px' }}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            style={{
              padding: '5px 10px',
              backgroundColor: currentPage === number ? '#add8e6' : '#e0e0e0',
              border: '1px solid #ccc',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
*/
/*import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../css/kopa.module.css';
import Button from '../part_by_part/button';

const Home = () => {
  const navigate = useNavigate();
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2; // Show 2 posts per page
  const dummyPosts = [
    {
      id: 1,
      title: 'Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor',
      content: 'Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor',
      author: 'John Doe',
      date: '7 January 2026',
      reactions: { Like: 20, Love: 60, Angry: 5, Sad: 5 },
      comments: [
        { id: 1, author: 'Author Name', date: '10 February 2025', text: 'Lorem ipsum Dolor Lorem ipsum Dolor' },
        { id: 2, author: 'Author Name', date: '10 February 2025', text: 'Lorem ipsum Dolor Lorem ipsum Dolor' },
      ],
    },
    {
      id: 2,
      title: 'Another Post Title Here',
      content: 'Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor',
      author: 'Jane Smith',
      date: '15 March 2026',
      reactions: { Like: 30, Love: 40, Angry: 15, Sad: 15 },
      comments: [
        { id: 3, author: 'User One', date: '12 April 2025', text: 'Great post!' },
        { id: 4, author: 'User Two', date: '12 April 2025', text: 'Nice content!' },
      ],
    },
    {
      id: 3,
      title: 'Third Post Example',
      content: 'Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor',
      author: 'Alex Brown',
      date: '20 May 2026',
      reactions: { Like: 50, Love: 30, Angry: 10, Sad: 10 },
      comments: [
        { id: 5, author: 'User Three', date: '15 June 2025', text: 'Interesting!' },
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
        <div key={post.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
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
                  backgroundColor: selectedReaction === reaction ? '#add8e6' : '#e0e0e0',
                  padding: '5px 10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                {reaction} {post.reactions[reaction]}%
              </button>
            ))}
          </div>
          <div style={{ backgroundColor: '#f0f0f0', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
            <p>{post.comments.length} Comments</p>
            <div style={{ display: 'flex', gap: '5px', margin: '10px 0' }}>
              <input type="text" placeholder="Write your comment..." style={{ flex: 1, padding: '5px' }} />
              <button style={{ padding: '5px 10px', backgroundColor: '#e0e0e0', border: '1px solid #ccc' }}>→</button>
            </div>
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

      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '5px' }}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            style={{
              padding: '5px 10px',
              backgroundColor: currentPage === number ? '#add8e6' : '#e0e0e0',
              border: '1px solid #ccc',
              borderRadius: '5px',
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

export default Home;*/
/*
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
*/
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