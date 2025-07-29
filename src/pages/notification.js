// src/pages/notification.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/kopa.module.css';
import Button from '../part_by_part/button';

const Notification = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>This is the Notification Page</h2>
      <h1 className={styles.heading}>Welcome to Notifications</h1>
      <Button
        label="Back to Home"
        variant="primary"
        onClick={() => navigate('/')}
      />
    </div>
  );
};

export default Notification;