import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../css/kopa.module.css';

const Author = () => {
  const { name } = useParams();

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h2>Author Profile</h2>
      <p>Name: {name || 'Unknown Author'}</p>
      <p>This is a minimal profile page to test routing.</p>
      <h1 className={styles.heading}>Author Details</h1>
    </div>
  );
};

export default Author;